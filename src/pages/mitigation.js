import Head from "next/head";
import { useImmer } from "use-immer";
import dummyResponse from "@/util/dummyresponse";
import { useEffect, useState } from "react";
import { useTableData } from "@/contexts/dataContext";
import { fetchAssetRisk } from "@/api";

/*
 props: {
    id: string | number,
    question: '',
    selected: string | number,
    answers: [{
        id: string | number,
        text: string,
        longText: string,
        value: string | number
    }]
 }
*/
export function QuestionBlock(props) {
  const { id, question, answers, selected, onAnswerChange } = props;
  const [randomString] = useState(Math.random().toString(36).substring(7));

  return (
    <div>
      <h3>{question}</h3>
      <div>
        {answers.map((answer, i) => {
          return (
            <div key={i}>
              <input
                type="radio"
                name={randomString}
                id={randomString + id + answer.id}
                value={answer.value}
                checked={selected === answer.id}
                onChange={(e) => {
                  onAnswerChange(answer);
                }}
              />
              <label
                htmlFor={randomString + id + answer.id}
                title={answer.longText}
              >
                {answer.text}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const parseResponse = (response) => {
  const { headers, rows } = response;
  const screenIdIndex = headers.findIndex((h) => h === "Screen");
  const screenTextIndex = headers.findIndex((h) => h === "Screen Name");
  const questionIdIndex = headers.findIndex((h) => h === "Question #");
  const questionTextIndex = headers.findIndex((h) => h === "Question");
  const anwereIdIndex = headers.findIndex((h) => h === "Answer Value");
  const anwereTextIndex = headers.findIndex((h) => h === "Answer Text");
  const answerLongTextIndex = headers.findIndex(
    (h) => h === "Answer MouseOver"
  );
  const mitgationStartIndex = headers.findIndex((h) => h === "M1015");
  const mitigationEndIndex = headers.findIndex((h) => h === "M1016");
  const screens = {};
  const mitigation = {};
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const screenId = row[screenIdIndex];
    const screenText = row[screenTextIndex];
    const questionId = row[questionIdIndex];
    const questionText = row[questionTextIndex];
    const answerId = row[anwereIdIndex];
    const answerText = row[anwereTextIndex];
    const answerLongText = row[answerLongTextIndex];
    const mitigationValueSum = row
      .slice(mitgationStartIndex, mitigationEndIndex + 1)
      .reduce((acc, cur) => acc + parseFloat(cur), 0);
    if (!screens[screenId]) {
      screens[screenId] = {
        id: screenId,
        text: screenText,
        questions: [],
        // mitigation: {},
      };
    }
    const screen = screens[screenId];
    const question = screen.questions.find((q) => q.id === questionId);
    if (!question) {
      screen.questions.push({
        id: questionId,
        question: questionText,
        answers: [
          {
            id: answerId,
            text: answerText,
            longText: answerLongText,
            value: answerId,
          },
        ],
      });
    } else {
      question.answers.push({
        id: answerId,
        text: answerText,
        longText: answerLongText,
        value: answerId,
      });
    }
    // if (!screen.mitigation[questionId]) {
    //   screen.mitigation[questionId] = {};
    // }
    // screen.mitigation[questionId][answerId] = mitigationValueSum;
  }
  return { screens };
};
export default function Mitigation() {
  const { tableData, setTableData } = useTableData();
  const [response, setResponse] = useState(undefined);
  //   same as return of parseResponse but questions will have selected key denoting currently selected answer
  const [screens, setScreens] = useImmer({});
  useEffect(() => {
    setScreens(parseResponse(tableData).screens);
  }, [setScreens, tableData]);

  const handleSubmit = (e) => {
    /*
   {
  "screen_questions": [
    {
      "screen_name": "string",
      "questions_response": [
        {
          "question_id": number,
          "answer_value": number
        }
      ]
    }
  ]
}
    */
    const screenQuestions = Object.values(screens)
      .map((screen) => {
        return {
          screen_name: screen.text,
          questions_response: screen.questions
            .filter((question) => {
              return "selected" in question;
            })
            .map((question) => {
              return {
                question_id: parseInt(question.id),
                answer_value: parseInt(question.selected),
              };
            }),
        };
      })
      .filter((screen) => screen.questions_response.length > 0);

    fetchAssetRisk({
      screen_questions: screenQuestions,
    }).then(setResponse);
  };
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          {Object.values(screens).map((screen, i) => {
            return (
              <div key={screen.id}>
                <h2
                  style={{
                    position: "sticky",
                    top: 0,
                    background: "white",
                    zIndex: 1,
                  }}
                >
                  {screen.text}
                </h2>
                {screen.questions.map((question, i) => {
                  return (
                    <QuestionBlock
                      key={i}
                      {...question}
                      onAnswerChange={(answer) => {
                        setScreens((draft) => {
                          draft[screen.id].questions[i].selected = answer.id;
                        });
                      }}
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
        <div>
          <button onClick={handleSubmit}>Submit</button>
        </div>
        <div>
          {typeof response === "object" && (
            <pre>{JSON.stringify(response, null, 2)}</pre>
          )}
        </div>
      </main>
    </>
  );
}
