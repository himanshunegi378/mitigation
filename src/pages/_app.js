// import '@/styles/globals.css'
import { NavLink } from "@/components/NavLink";
import { DataProvider } from "@/contexts/dataContext";
import { Box, ChakraProvider, Flex, Stack } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <DataProvider>
          {/* Navbar */}
          <Box bg="gray.100" p={2}>
            <Flex justifyContent="flex-end" alignItems="center">
              <Stack direction="row">
                {[
                  {
                    href: "/",
                    text: "Grid",
                  },
                  { href: "/mitigation", text: "Questions" },
                ].map((link) => {
                  return (
                    <NavLink key={link.href} href={link.href}>
                      {link.text}
                    </NavLink>
                  );
                })}
              </Stack>
            </Flex>
          </Box>
          <Component {...pageProps} />
        </DataProvider>
      </ChakraProvider>
    </QueryClientProvider>
  );
}
