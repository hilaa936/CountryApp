import { QueryClient, QueryClientProvider } from "react-query";

export const queryClient = new QueryClient();

export const QueryClientWrapper = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
