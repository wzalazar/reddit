import '@testing-library/jest-dom/extend-expect'


jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "localhost:3000"
  })
}));


// global.XMLHttpRequest = undefined;