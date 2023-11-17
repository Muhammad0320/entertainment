import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login.jsx";
import AppLayout from "./ui/AppLayout";
import Movies from "./pages/MoviesPage";
import Bookmark from "./pages/Bookmark";
import TVSeries from "./pages/TVSeries";
import { Toaster } from "react-hot-toast";
import PageNotFound from "./pages/PageNotFound";
import GlobalStyles from "./Styles/GlobalStyles";
import { ViewPortProvider } from "./contexts/Viewport";
import { BookmarkProvider } from "./contexts/Bookmarks";
import ProtectedRoutes from "./features/Auth/ProtectedRoutes.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

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
              <Route
                element={
                  <ProtectedRoutes>
                    <AppLayout />
                  </ProtectedRoutes>
                }
              >
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
                  duration: 5000,
                },

                success: {
                  duration: 3500,
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
