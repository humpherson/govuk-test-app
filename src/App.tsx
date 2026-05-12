import { NavLink, Navigate, Route, Routes } from "react-router-dom";
import { GovUkPageTemplate } from "@dan-humpherson/govuk-react-adapter";
import AllExamplesPage from "./pages/AllExamplesPage";
import ComponentExamplesPage from "./pages/ComponentExamplesPage";
import QuestionPageExamplesPage from "./pages/QuestionPageExamplesPage";
import StartPageExamplesPage from "./pages/StartPageExamplesPage";
import CheckAnswersPageExamplesPage from "./pages/CheckAnswersPageExamplesPage";
import ConfirmationPageExamplesPage from "./pages/ConfirmationPageExamplesPage";

function TestPageNavigation() {
  const getLinkClassName = (isActive: boolean) =>
    [
      "govuk-link",
      "govuk-!-font-weight-bold",
      isActive ? "govuk-link--no-visited-state" : "",
    ]
      .filter(Boolean)
      .join(" ");

  return (
    <nav
      className="govuk-!-margin-bottom-8"
      aria-label="Component example pages"
    >
      <ul className="govuk-list govuk-list--bullet">
        <li>
          <NavLink
            to="/all"
            className={({ isActive }) => getLinkClassName(isActive)}
          >
            All examples
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/components"
            className={({ isActive }) => getLinkClassName(isActive)}
          >
            Components
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/question-pages"
            className={({ isActive }) => getLinkClassName(isActive)}
          >
            GovUkQuestionPage
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/start-pages"
            className={({ isActive }) => getLinkClassName(isActive)}
          >
            GovUkStartPage
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/check-answers-pages"
            className={({ isActive }) => getLinkClassName(isActive)}
          >
            GovUkCheckAnswersPage
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/confirmation-pages"
            className={({ isActive }) => getLinkClassName(isActive)}
          >
            GovUkConfirmationPage
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

const base = import.meta.env.BASE_URL;

export default function App() {
  return (
    <GovUkPageTemplate
      homepageUrl={base}
      headerProps={{
        productName: "GOV.UK",
      }}
      serviceNavigationProps={{
        serviceName: "GOV.UK React Adapter test app",
        serviceUrl: base,
        navigationItems: [
          { href: `${base}all`, text: "All examples" },
          { href: `${base}components`, text: "Components" },
          { href: `${base}question-pages`, text: "Question pages" },
          { href: `${base}start-pages`, text: "Start pages" },
          { href: `${base}check-answers-pages`, text: "Check answers pages" },
          { href: `${base}confirmation-pages`, text: "Confirmation pages" },
        ],
      }}
      footerProps={{
        meta: {
          items: [
            { text: "Help", href: `${base}help` },
            { text: "Cookies", href: `${base}cookies` },
            { text: "Accessibility", href: `${base}accessibility` },
          ],
        },
      }}
    >
      <h1 className="govuk-heading-xl">GOV.UK React Adapter test app</h1>
      <p className="govuk-body">
        Use this app to review components and page patterns in isolation.
      </p>

      <TestPageNavigation />

      <Routes>
        <Route path="/" element={<Navigate to="/all" replace />} />
        <Route path="/all" element={<AllExamplesPage />} />
        <Route path="/components" element={<ComponentExamplesPage />} />
        <Route path="/question-pages" element={<QuestionPageExamplesPage />} />
        <Route path="/start-pages" element={<StartPageExamplesPage />} />
        <Route
          path="/check-answers-pages"
          element={<CheckAnswersPageExamplesPage />}
        />
        <Route
          path="/confirmation-pages"
          element={<ConfirmationPageExamplesPage />}
        />
      </Routes>
    </GovUkPageTemplate>
  );
}
