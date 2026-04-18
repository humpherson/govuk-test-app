import {
  GovUkConfirmationPage,
  InsetText,
  WarningText,
} from "@dan-humpherson/govuk-react-adapter";

export default function ConfirmationPageExamplesPage() {
  return (
    <>
      <h2 className="govuk-heading-l">GovUkConfirmationPage examples</h2>
      <p className="govuk-body">
        These examples show the confirmation-page pattern for successful
        submissions and completed actions.
      </p>

      <section
        className="govuk-!-margin-bottom-9"
        aria-labelledby="confirmation-page-basic"
      >
        <h3 id="confirmation-page-basic" className="govuk-heading-m">
          Confirmation page with reference number
        </h3>

        <div className="govuk-!-padding-bottom-6 govuk-!-margin-bottom-6 govuk-!-border-bottom">
          <GovUkConfirmationPage
            title="Application complete"
            referenceNumber="HDJ2123F"
            body={
              <>
                <p>We have sent you a confirmation email.</p>
              </>
            }
            nextSteps={
              <>
                <p>We’ve sent your application to our licensing team.</p>
                <p>They will contact you if they need more information.</p>
              </>
            }
          />
        </div>
      </section>

      <section
        className="govuk-!-margin-bottom-9"
        aria-labelledby="confirmation-page-no-reference"
      >
        <h3 id="confirmation-page-no-reference" className="govuk-heading-m">
          Confirmation page without reference number
        </h3>

        <div className="govuk-!-padding-bottom-6 govuk-!-margin-bottom-6 govuk-!-border-bottom">
          <GovUkConfirmationPage
            title="Preferences updated"
            body={
              <>
                <p>Your communication preferences have been saved.</p>
              </>
            }
            nextSteps={
              <>
                <p>
                  Your new settings will apply the next time we contact you.
                </p>
              </>
            }
          />
        </div>
      </section>

      <section
        className="govuk-!-margin-bottom-9"
        aria-labelledby="confirmation-page-with-extra-content"
      >
        <h3
          id="confirmation-page-with-extra-content"
          className="govuk-heading-m"
        >
          Confirmation page with inset and warning content
        </h3>

        <div className="govuk-!-padding-bottom-6 govuk-!-margin-bottom-6">
          <GovUkConfirmationPage
            title="Report submitted"
            referenceNumber="REP-2026-441"
            body={
              <>
                <p>Your report has been submitted successfully.</p>
              </>
            }
            nextSteps={
              <>
                <p>
                  We will review your report and contact you if we need more
                  information.
                </p>
              </>
            }
          >
            <>
              <InsetText>
                Save your reference number if you need to contact us about this
                report.
              </InsetText>

              <WarningText>
                Do not submit another report unless your circumstances change.
              </WarningText>
            </>
          </GovUkConfirmationPage>
        </div>
      </section>
    </>
  );
}
