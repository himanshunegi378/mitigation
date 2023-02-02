const { axiosInstance } = require("./instances");

export const fetchScreenRiskWeight = async () => {
  return axiosInstance
    .get("/risk_db/download_screen_risk_weight")
    .then((res) => res.data);
};

export const updateScreenQuestionMatrix = async (payload) => {
  return axiosInstance
    .post("/risk_db/update_screen_question_matrix", payload)
    .then((res) => res.data);
};

export const uploadScreenQuestionMatrix = async (formData) => {
  return axiosInstance.post(
    "/risk_db/upload_screen_question_matrix/",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
};

export const fetchAssetRisk = async (payload) => {
  return axiosInstance
    .post("/risks/get_asset_risk/", payload)
    .then((res) => res.data);
};
