import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login.jsx";
import Movies from "./pages/MoviesPage";
import Bookmark from "./pages/Bookmark";
import AppLayout from "./ui/AppLayout";
import Signup from "./pages/Signup";
import PageNotFound from "./pages/PageNotFound";
import GlobalStyles from "./Styles/GlobalStyles";
import TVSeries from "./pages/TVSeries";
import { ViewPortProvider } from "./contexts/Viewport";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { BookmarkProvider } from "./contexts/bookmarks";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BookmarkProvider>
        <ViewPortProvider>
          <GlobalStyles />
          <BrowserRouter>
            <Routes>
              <Route element={<AppLayout />}>
                <Route index element={<Navigate replace to="/home" />} />
                <Route path="/home" element={<Home />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/tv" element={<TVSeries />} />
                <Route path="/bookmarks" element={<Bookmark />} />
              </Route>

              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>

            <Toaster
              position="top-center"
              gutter={13}
              containerStyle={{ margin: "8px" }}
              toastOptions={{
                error: {
                  duration: 6000,
                },

                success: {
                  duration: 4000,
                },

                style: {
                  padding: "16px 24px",
                  fontSize: "16px",
                  backgroundColor: "var(--color-blue-dark)",
                  color: "var(--color-white)",
                  maxWidth: "500px",
                },
              }}
            />
          </BrowserRouter>
        </ViewPortProvider>
      </BookmarkProvider>
    </QueryClientProvider>
  );
}

export default App;
