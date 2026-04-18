import ComponentExamplesPage from "./ComponentExamplesPage";
import QuestionPageExamplesPage from "./QuestionPageExamplesPage";
import StartPageExamplesPage from "./StartPageExamplesPage";
import CheckAnswersPageExamplesPage from "./CheckAnswersPageExamplesPage";
import ConfirmationPageExamplesPage from "./ConfirmationPageExamplesPage";

export default function AllExamplesPage() {
  return (
    <>
      <h2 className="govuk-heading-l">All examples</h2>
      <p className="govuk-body">
        This page brings together all current component examples, variations and
        page patterns in one place.
      </p>

      <div className="govuk-!-margin-bottom-9">
        <ComponentExamplesPage />
      </div>

      <div className="govuk-!-margin-bottom-9">
        <QuestionPageExamplesPage />
      </div>

      <div className="govuk-!-margin-bottom-9">
        <StartPageExamplesPage />
      </div>

      <div className="govuk-!-margin-bottom-9">
        <CheckAnswersPageExamplesPage />
      </div>

      <div className="govuk-!-margin-bottom-9">
        <ConfirmationPageExamplesPage />
      </div>
    </>
  );
}
