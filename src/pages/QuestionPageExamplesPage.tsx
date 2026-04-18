import { useState, type ChangeEvent } from "react";
import {
  Checkboxes,
  DateInput,
  GovUkQuestionPage,
  Radios,
  TextInput,
} from "@dan-humpherson/govuk-react-adapter";

export default function QuestionPageExamplesPage() {
  const [selectedContactMethod, setSelectedContactMethod] =
    useState<string>("email");
  const [selectedContactPreferences, setSelectedContactPreferences] = useState<
    string[]
  >(["email"]);

  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedContactMethod(event.target.value);
  };

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;

    setSelectedContactPreferences((previousValues) =>
      checked
        ? previousValues.includes(value)
          ? previousValues
          : [...previousValues, value]
        : previousValues.filter((previousValue) => previousValue !== value)
    );
  };

  return (
    <>
      <h2 className="govuk-heading-l">GovUkQuestionPage examples</h2>
      <p className="govuk-body">
        These examples show both supported question page modes: page-owned
        headings and child-owned headings.
      </p>

      <section
        className="govuk-!-margin-bottom-9"
        aria-labelledby="question-page-text-basic"
      >
        <h3 id="question-page-text-basic" className="govuk-heading-m">
          Text input question page
        </h3>

        <div className="govuk-!-padding-bottom-6 govuk-!-margin-bottom-6 govuk-!-border-bottom">
          <GovUkQuestionPage
            title="What is your first name?"
            hint="Enter the name exactly as it appears on your passport."
            backLinkHref="/previous"
          >
            <TextInput
              id="first-name-basic"
              name="firstNameBasic"
              label="What is your first name?"
              labelClassName="govuk-visually-hidden"
              widthClass="govuk-input--width-20"
            />
          </GovUkQuestionPage>
        </div>
      </section>

      <section
        className="govuk-!-margin-bottom-9"
        aria-labelledby="question-page-text-caption-error"
      >
        <h3 id="question-page-text-caption-error" className="govuk-heading-m">
          Text input with caption and error state
        </h3>

        <div className="govuk-!-padding-bottom-6 govuk-!-margin-bottom-6 govuk-!-border-bottom">
          <GovUkQuestionPage
            caption="About you"
            title="What is your National Insurance number?"
            hint="It’s on your National Insurance card, benefit letter, payslip or P60."
            backLinkHref="/previous"
            errorSummary={{
              errors: [
                {
                  href: "#national-insurance-number-question",
                  text: "Enter your National Insurance number",
                },
              ],
            }}
          >
            <TextInput
              id="national-insurance-number-question"
              name="nationalInsuranceNumberQuestion"
              label="What is your National Insurance number?"
              labelClassName="govuk-visually-hidden"
              widthClass="govuk-input--width-20"
              error="Enter your National Insurance number"
            />
          </GovUkQuestionPage>
        </div>
      </section>

      <section
        className="govuk-!-margin-bottom-9"
        aria-labelledby="question-page-date-basic"
      >
        <h3 id="question-page-date-basic" className="govuk-heading-m">
          Date input question page
        </h3>

        <div className="govuk-!-padding-bottom-6 govuk-!-margin-bottom-6 govuk-!-border-bottom">
          <GovUkQuestionPage headingMode="children" backLinkHref="/previous">
            <DateInput
              id="date-of-birth-basic"
              namePrefix="dateOfBirthBasic"
              legend="What is your date of birth?"
              hint="For example, 27 3 2007"
              isPageHeading
            />
          </GovUkQuestionPage>
        </div>
      </section>

      <section
        className="govuk-!-margin-bottom-9"
        aria-labelledby="question-page-date-caption-error"
      >
        <h3 id="question-page-date-caption-error" className="govuk-heading-m">
          Date input with caption and error state
        </h3>

        <div className="govuk-!-padding-bottom-6 govuk-!-margin-bottom-6 govuk-!-border-bottom">
          <GovUkQuestionPage
            headingMode="children"
            backLinkHref="/previous"
            errorSummary={{
              errors: [
                {
                  href: "#date-of-birth-error-day",
                  text: "Date of birth must be in the past",
                },
              ],
            }}
          >
            <DateInput
              id="date-of-birth-error"
              namePrefix="dateOfBirthError"
              caption="About you"
              legend="What is your date of birth?"
              hint="For example, 27 3 2007"
              error="Date of birth must be in the past"
              isPageHeading
            />
          </GovUkQuestionPage>
        </div>
      </section>

      <section
        className="govuk-!-margin-bottom-9"
        aria-labelledby="question-page-radios"
      >
        <h3 id="question-page-radios" className="govuk-heading-m">
          Radios question page with interactive selected state
        </h3>

        <div className="govuk-!-padding-bottom-6 govuk-!-margin-bottom-6 govuk-!-border-bottom">
          <GovUkQuestionPage headingMode="children" backLinkHref="/previous">
            <Radios
              name="questionPageContactMethod"
              legend="How would you like to be contacted?"
              hint="Select one option."
              items={[
                { value: "email", text: "Email" },
                { value: "phone", text: "Phone" },
                { value: "text", text: "Text message" },
              ]}
              value={selectedContactMethod}
              onChange={handleRadioChange}
              isPageHeading
            />
          </GovUkQuestionPage>
        </div>
      </section>

      <section
        className="govuk-!-margin-bottom-9"
        aria-labelledby="question-page-checkboxes"
      >
        <h3 id="question-page-checkboxes" className="govuk-heading-m">
          Checkboxes question page with interactive selected state
        </h3>

        <div className="govuk-!-padding-bottom-6">
          <GovUkQuestionPage headingMode="children" backLinkHref="/previous">
            <Checkboxes
              name="contactPreferencesQuestion"
              legend="How would you like to be contacted?"
              hint="Select all options that apply."
              items={[
                { value: "email", text: "Email" },
                { value: "phone", text: "Phone" },
                { value: "text", text: "Text message" },
              ]}
              values={selectedContactPreferences}
              onChange={handleCheckboxChange}
              isPageHeading
            />
          </GovUkQuestionPage>
        </div>
      </section>
    </>
  );
}
