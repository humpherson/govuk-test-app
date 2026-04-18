import { GovUkStartPage } from "@dan-humpherson/govuk-react-adapter";

export default function StartPageExamplesPage() {
  return (
    <>
      <h2 className="govuk-heading-l">GovUkStartPage examples</h2>
      <p className="govuk-body">
        These examples show the start-page pattern for content-led service entry
        points.
      </p>

      <section
        className="govuk-!-margin-bottom-9"
        aria-labelledby="start-page-basic"
      >
        <h3 id="start-page-basic" className="govuk-heading-m">
          Basic start page
        </h3>

        <div className="govuk-!-padding-bottom-6 govuk-!-margin-bottom-6 govuk-!-border-bottom">
          <GovUkStartPage
            title="Check MOT history"
            description="Use this service to check MOT test results and the expiry date for a vehicle."
            startButtonHref="/enter-registration"
            whatYouNeed={["the vehicle registration number"]}
            beforeYouStart="This service is also available in Welsh."
          />
        </div>
      </section>

      <section
        className="govuk-!-margin-bottom-9"
        aria-labelledby="start-page-extended"
      >
        <h3 id="start-page-extended" className="govuk-heading-m">
          Start page with additional content
        </h3>

        <div className="govuk-!-padding-bottom-6 govuk-!-margin-bottom-6">
          <GovUkStartPage
            title="Apply for a licence"
            description="Use this service to apply for a licence online."
            startButtonHref="/eligibility"
            whatYouNeed={[
              "proof of identity",
              "your current address",
              "payment details",
            ]}
            beforeYouStart="You can save your progress and return later."
          >
            <>
              <h2 className="govuk-heading-m">What happens next</h2>
              <p className="govuk-body">
                You’ll answer a few questions, review your answers and then
                submit your application.
              </p>
            </>
          </GovUkStartPage>
        </div>
      </section>
    </>
  );
}
