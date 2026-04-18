import { GovUkCheckAnswersPage } from "@dan-humpherson/govuk-react-adapter";

export default function CheckAnswersPageExamplesPage() {
  return (
    <>
      <h2 className="govuk-heading-l">GovUkCheckAnswersPage examples</h2>
      <p className="govuk-body">
        These examples show the check-answers pattern built on top of summary
        lists, including mixed rows, multiple actions, missing information and
        card-based variants.
      </p>

      <section
        className="govuk-!-margin-bottom-9"
        aria-labelledby="check-answers-page-basic"
      >
        <h3 id="check-answers-page-basic" className="govuk-heading-m">
          Standard check answers page
        </h3>

        <div className="govuk-!-margin-bottom-8 govuk-!-border-bottom govuk-!-padding-bottom-6">
          <GovUkCheckAnswersPage
            title="Check your answers before sending your application"
            backLinkHref="/previous"
            sections={[
              {
                title: "Personal details",
                rows: [
                  {
                    key: { text: "Name" },
                    value: { text: "Sarah Philips" },
                    actions: {
                      items: [
                        {
                          href: "/change-name",
                          text: "Change",
                          visuallyHiddenText: "name",
                        },
                      ],
                    },
                  },
                  {
                    key: { text: "Date of birth" },
                    value: { text: "5 January 1978" },
                    actions: {
                      items: [
                        {
                          href: "/change-date-of-birth",
                          text: "Change",
                          visuallyHiddenText: "date of birth",
                        },
                      ],
                    },
                  },
                  {
                    key: { text: "Address" },
                    value: {
                      html: (
                        <>
                          72 Guild Street
                          <br />
                          London
                          <br />
                          SE23 6FH
                        </>
                      ),
                    },
                    actions: {
                      items: [
                        {
                          href: "/change-address",
                          text: "Change",
                          visuallyHiddenText: "address",
                        },
                      ],
                    },
                  },
                ],
              },
              {
                title: "Application details",
                rows: [
                  {
                    key: { text: "Licence type" },
                    value: { text: "For personal use" },
                    actions: {
                      items: [
                        {
                          href: "/change-licence-type",
                          text: "Change",
                          visuallyHiddenText: "licence type",
                        },
                      ],
                    },
                  },
                  {
                    key: { text: "Licence period" },
                    value: { text: "Valid for 6 months" },
                    actions: {
                      items: [
                        {
                          href: "/change-licence-period",
                          text: "Change",
                          visuallyHiddenText: "licence period",
                        },
                      ],
                    },
                  },
                ],
              },
            ]}
            submitHint="By submitting this application you are confirming that, to the best of your knowledge, the details you are providing are correct."
          />
        </div>
      </section>

      <section
        className="govuk-!-margin-bottom-9"
        aria-labelledby="check-answers-page-mixed"
      >
        <h3 id="check-answers-page-mixed" className="govuk-heading-m">
          Mixed rows, multiple actions and missing information
        </h3>

        <div className="govuk-!-margin-bottom-8 govuk-!-border-bottom govuk-!-padding-bottom-6">
          <GovUkCheckAnswersPage
            title="Check your answers before sending your application"
            backLinkHref="/previous"
            sections={[
              {
                title: "Contact details",
                rows: [
                  {
                    key: { text: "Name" },
                    value: { text: "Sarah Philips" },
                    actions: {
                      items: [
                        {
                          href: "/change-name",
                          text: "Change",
                          visuallyHiddenText: "name",
                        },
                      ],
                    },
                  },
                  {
                    key: { text: "Contact details" },
                    value: {
                      html: (
                        <>
                          <p className="govuk-body">07700 900457</p>
                          <p className="govuk-body">
                            sarah.phillips@example.com
                          </p>
                        </>
                      ),
                    },
                    actions: {
                      items: [
                        {
                          href: "/add-contact-details",
                          text: "Add",
                          visuallyHiddenText: "contact details",
                        },
                        {
                          href: "/change-contact-details",
                          text: "Change",
                          visuallyHiddenText: "contact details",
                        },
                      ],
                    },
                  },
                  {
                    key: { text: "Passport number" },
                    value: {
                      html: (
                        <a href="/add-passport-number" className="govuk-link">
                          Add passport number
                        </a>
                      ),
                    },
                    noActions: true,
                  },
                  {
                    key: { text: "Nationality" },
                    value: { text: "Missing" },
                    noActions: true,
                  },
                ],
              },
            ]}
            submitHint="Check the information carefully. Some details are still missing and may need to be added before submission."
            primaryActionText="Save and continue"
            secondaryActions={[
              {
                text: "Save as draft",
                href: "/save-as-draft",
              },
            ]}
          />
        </div>
      </section>

      <section
        className="govuk-!-margin-bottom-9"
        aria-labelledby="check-answers-page-no-actions"
      >
        <h3 id="check-answers-page-no-actions" className="govuk-heading-m">
          Read-only review with no actions
        </h3>

        <div className="govuk-!-margin-bottom-8 govuk-!-border-bottom govuk-!-padding-bottom-6">
          <GovUkCheckAnswersPage
            title="Review application details"
            backLinkHref="/previous"
            sections={[
              {
                title: "Submitted details",
                rows: [
                  {
                    key: { text: "Application reference" },
                    value: { text: "APP-102938" },
                    noActions: true,
                  },
                  {
                    key: { text: "Name" },
                    value: { text: "Sarah Philips" },
                    noActions: true,
                  },
                  {
                    key: { text: "Date submitted" },
                    value: { text: "17 April 2026" },
                    noActions: true,
                  },
                ],
              },
            ]}
            submitHeading="Continue"
            submitHint="You cannot change these answers on this screen."
            primaryActionText="Continue"
          />
        </div>
      </section>

      <section
        className="govuk-!-margin-bottom-9"
        aria-labelledby="check-answers-page-no-border"
      >
        <h3 id="check-answers-page-no-border" className="govuk-heading-m">
          Section using summary list without borders
        </h3>

        <div className="govuk-!-margin-bottom-8 govuk-!-border-bottom govuk-!-padding-bottom-6">
          <GovUkCheckAnswersPage
            title="Review case summary"
            backLinkHref="/previous"
            sections={[
              {
                title: "Case metadata",
                noBorder: true,
                rows: [
                  {
                    key: { text: "Case ID" },
                    value: { text: "CASE-4421" },
                    noActions: true,
                  },
                  {
                    key: { text: "Status" },
                    value: { text: "In review" },
                    noActions: true,
                  },
                  {
                    key: { text: "Assigned team" },
                    value: { text: "Licensing team" },
                    noActions: true,
                    noBorder: true,
                  },
                ],
              },
            ]}
            submitHeading="Continue"
            primaryActionText="Continue"
          />
        </div>
      </section>

      <section
        className="govuk-!-margin-bottom-9"
        aria-labelledby="check-answers-page-cards"
      >
        <h3 id="check-answers-page-cards" className="govuk-heading-m">
          Multiple summary cards
        </h3>

        <div className="govuk-!-margin-bottom-8">
          <GovUkCheckAnswersPage
            title="Check applicant summaries"
            backLinkHref="/previous"
            intro="Use summary cards when you need to review multiple records of the same type."
            sections={[
              {
                card: {
                  title: {
                    text: "Sarah Philips",
                    headingLevel: 2,
                  },
                  actions: {
                    items: [
                      {
                        href: "/delete-sarah",
                        text: "Delete",
                        visuallyHiddenText: "Sarah Philips",
                      },
                    ],
                  },
                },
                rows: [
                  {
                    key: { text: "Course" },
                    value: { text: "English literature" },
                    actions: {
                      items: [
                        {
                          href: "/change-course-sarah",
                          text: "Change",
                          visuallyHiddenText: "course for Sarah Philips",
                        },
                      ],
                    },
                  },
                  {
                    key: { text: "Location" },
                    value: { text: "Main site" },
                    actions: {
                      items: [
                        {
                          href: "/change-location-sarah",
                          text: "Change",
                          visuallyHiddenText: "location for Sarah Philips",
                        },
                      ],
                    },
                  },
                ],
              },
              {
                card: {
                  title: {
                    text: "David Jones",
                    headingLevel: 2,
                  },
                  actions: {
                    items: [
                      {
                        href: "/delete-david",
                        text: "Delete",
                        visuallyHiddenText: "David Jones",
                      },
                      {
                        href: "/withdraw-david",
                        text: "Withdraw",
                        visuallyHiddenText: "David Jones",
                      },
                    ],
                  },
                },
                rows: [
                  {
                    key: { text: "Course" },
                    value: { text: "History" },
                    actions: {
                      items: [
                        {
                          href: "/change-course-david",
                          text: "Change",
                          visuallyHiddenText: "course for David Jones",
                        },
                      ],
                    },
                  },
                  {
                    key: { text: "Location" },
                    value: { text: "City campus" },
                    actions: {
                      items: [
                        {
                          href: "/change-location-david",
                          text: "Change",
                          visuallyHiddenText: "location for David Jones",
                        },
                      ],
                    },
                  },
                ],
              },
            ]}
            submitHeading="Continue"
            submitHint="Review each applicant summary before continuing."
            primaryActionText="Continue"
          />
        </div>
      </section>
    </>
  );
}
