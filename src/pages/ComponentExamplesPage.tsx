import {
  useState,
  type ChangeEvent,
  type Dispatch,
  type SetStateAction,
} from "react";
import {
  Accordion,
  BackLink,
  Breadcrumbs,
  Button,
  ButtonGroup,
  CharacterCount,
  Checkboxes,
  CookieBanner,
  DateInput,
  Details,
  ErrorMessage,
  ErrorSummary,
  ExitThisPage,
  Fieldset,
  FileUpload,
  GovUkFooter,
  GovUkHeader,
  GovUkServiceNavigation,
  InsetText,
  NotificationBanner,
  Pagination,
  Panel,
  PasswordInput,
  PhaseBanner,
  Radios,
  Select,
  SkipLink,
  SummaryList,
  Table,
  Tabs,
  Tag,
  TaskList,
  Textarea,
  TextInput,
  WarningText,
} from "@dan-humpherson/govuk-react-adapter";

export default function ComponentExamplesPage() {
  const hasErrors = true;

  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedContactMethod, setSelectedContactMethod] =
    useState<string>("email");
  const [selectedNationalities, setSelectedNationalities] = useState<string[]>(
    []
  );
  const [selectedContactPreferences, setSelectedContactPreferences] = useState<
    string[]
  >(["email", "text"]);
  const [selectedChannels, setSelectedChannels] = useState<string[]>([]);
  const [selectedContactDetails, setSelectedContactDetails] = useState<
    string[]
  >(["email"]);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([
    "open",
    "closed",
  ]);
  const [selectedAccountPermissions, setSelectedAccountPermissions] = useState<
    string[]
  >(["read"]);
  const [characterCountText, setCharacterCountText] = useState<string>(
    "It is available Monday to Friday, 9am to 5pm."
  );

  const handleRadioChange =
    (setter: (value: string) => void) =>
    (event: ChangeEvent<HTMLInputElement>) => {
      setter(event.target.value);
    };

  const handleCheckboxChange =
    (setter: Dispatch<SetStateAction<string[]>>) =>
    (event: ChangeEvent<HTMLInputElement>) => {
      const { value, checked } = event.target;

      setter((previousValues) =>
        checked
          ? previousValues.includes(value)
            ? previousValues
            : [...previousValues, value]
          : previousValues.filter((previousValue) => previousValue !== value)
      );
    };

  return (
    <>
      <h2 className="govuk-heading-l">Component examples</h2>
      <p className="govuk-body">
        These examples show the current standalone components and variations in
        the library.
      </p>

      <section
        className="govuk-!-margin-bottom-8"
        aria-labelledby="header-section"
      >
        <h3 id="header-section" className="govuk-heading-m">
          GovUkHeader
        </h3>
        <p className="govuk-body">
          The header should identify GOV.UK and remain separate from service
          navigation.
        </p>

        <div className="govuk-!-margin-top-4">
          <GovUkHeader homepageUrl="/" productName="GOV.UK" />
        </div>
      </section>

      <section
        className="govuk-!-margin-bottom-8"
        aria-labelledby="service-navigation-section"
      >
        <h3 id="service-navigation-section" className="govuk-heading-m">
          GovUkServiceNavigation
        </h3>
        <p className="govuk-body">
          Service navigation sits below the GOV.UK header and carries the
          service name and service-level navigation.
        </p>

        <div className="govuk-!-margin-top-4">
          <GovUkServiceNavigation
            serviceName="Apply for a licence"
            serviceUrl="/"
            navigationItems={[
              { href: "/overview", text: "Overview" },
              { href: "/application", text: "Application", active: true },
              { href: "/help", text: "Help" },
            ]}
          />
        </div>
      </section>

      <section
        className="govuk-!-margin-bottom-8"
        aria-labelledby="button-section"
      >
        <h3 id="button-section" className="govuk-heading-m">
          Button variants
        </h3>

        <h4 className="govuk-heading-s">Default</h4>
        <Button>Continue</Button>

        <h4 className="govuk-heading-s govuk-!-margin-top-6">Start button</h4>
        <Button href="/start" isStart>
          Start now
        </Button>

        <h4 className="govuk-heading-s govuk-!-margin-top-6">Disabled</h4>
        <Button disabled>Continue</Button>

        <h4 className="govuk-heading-s govuk-!-margin-top-6">Secondary</h4>
        <Button variant="secondary">Find address</Button>

        <h4 className="govuk-heading-s govuk-!-margin-top-6">Warning</h4>
        <Button variant="warning">Delete account</Button>

        <h4 className="govuk-heading-s govuk-!-margin-top-6">Inverse</h4>
        <div
          className="govuk-!-padding-4 govuk-!-margin-bottom-6"
          style={{ background: "#1d70b8" }}
        >
          <Button variant="inverse">Save and continue</Button>
        </div>

        <h4 className="govuk-heading-s govuk-!-margin-top-6">Button group</h4>
        <ButtonGroup>
          <Button>Save and continue</Button>
          <Button variant="secondary">Save as draft</Button>
        </ButtonGroup>
      </section>

      <section
        className="govuk-!-margin-bottom-8"
        aria-labelledby="link-section"
      >
        <h3 id="link-section" className="govuk-heading-m">
          BackLink
        </h3>

        <div className="govuk-!-margin-bottom-4">
          <BackLink href="/overview" />
        </div>
      </section>

      <section
        className="govuk-!-margin-bottom-8"
        aria-labelledby="text-input-section"
      >
        <h3 id="text-input-section" className="govuk-heading-m">
          TextInput
        </h3>

        <TextInput
          id="national-insurance-number"
          name="nationalInsuranceNumber"
          label="National Insurance number"
          hint="It’s on your National Insurance card, benefit letter, payslip or P60."
          widthClass="govuk-input--width-20"
          error={hasErrors ? "Enter your National Insurance number" : undefined}
        />
      </section>

      <section
        className="govuk-!-margin-bottom-8"
        aria-labelledby="date-input-section"
      >
        <h3 id="date-input-section" className="govuk-heading-m">
          DateInput
        </h3>

        <DateInput
          id="date-of-birth"
          namePrefix="dateOfBirth"
          legend="What is your date of birth?"
          hint="For example, 27 3 2007"
          error={hasErrors ? "Date of birth must be in the past" : undefined}
        />
      </section>

      <section
        className="govuk-!-margin-bottom-8"
        aria-labelledby="fieldset-section"
      >
        <h3 id="fieldset-section" className="govuk-heading-m">
          Fieldset
        </h3>

        <Fieldset
          id="address"
          legend="What is your address?"
          hint="Enter your current home address"
          legendSize="l"
          isPageHeading
        >
          <TextInput
            id="address-line-1"
            name="addressLine1"
            label="Address line 1"
            widthClass="govuk-input--width-20"
          />

          <TextInput
            id="postcode"
            name="postcode"
            label="Postcode"
            widthClass="govuk-input--width-10"
          />
        </Fieldset>
      </section>

      <section
        className="govuk-!-margin-bottom-8"
        aria-labelledby="radios-section"
      >
        <h3 id="radios-section" className="govuk-heading-m">
          Radios
        </h3>

        <h4 className="govuk-heading-s">Standard radios</h4>
        <Radios
          name="whereDoYouLive"
          legend="Where do you live?"
          items={[
            { value: "england", text: "England" },
            { value: "scotland", text: "Scotland" },
            { value: "wales", text: "Wales" },
            { value: "northern-ireland", text: "Northern Ireland" },
          ]}
          value={selectedCountry}
          onChange={handleRadioChange(setSelectedCountry)}
          isPageHeading
        />

        <h4 className="govuk-heading-s govuk-!-margin-top-8">
          Radios with hints
        </h4>
        <Radios
          name="contactMethod"
          legend="How would you prefer to be contacted?"
          items={[
            {
              value: "email",
              text: "Email",
              hint: "We’ll only use this to send you updates",
            },
            {
              value: "phone",
              text: "Phone",
              hint: "We’ll call you between 9am and 5pm",
            },
            {
              value: "text",
              text: "Text message",
              hint: "We’ll only send service updates",
            },
          ]}
        />

        <h4 className="govuk-heading-s govuk-!-margin-top-8">
          Radios with a divider
        </h4>
        <Radios
          name="whereDoYouLiveWithDivider"
          legend="Where do you live?"
          items={[
            { value: "england", text: "England" },
            { value: "scotland", text: "Scotland" },
            { value: "wales", text: "Wales" },
            { value: "northern-ireland", text: "Northern Ireland" },
            { divider: "or" },
            {
              value: "abroad",
              text: "I am a British citizen living abroad",
            },
          ]}
        />

        <h4 className="govuk-heading-s govuk-!-margin-top-8">Inline radios</h4>
        <Radios
          name="changedName"
          legend="Have you changed your name?"
          inline
          items={[
            { value: "yes", text: "Yes" },
            { value: "no", text: "No" },
          ]}
        />

        <h4 className="govuk-heading-s govuk-!-margin-top-8">
          Radios with conditionally revealed content
        </h4>
        <Radios
          name="contact"
          legend="How would you prefer to be contacted?"
          value={selectedContactMethod}
          onChange={handleRadioChange(setSelectedContactMethod)}
          items={[
            {
              value: "email",
              text: "Email",
              conditional: (
                <TextInput
                  id="contact-by-email"
                  name="contactByEmail"
                  label="Email address"
                  widthClass="govuk-input--width-20"
                  type="email"
                />
              ),
            },
            {
              value: "phone",
              text: "Phone",
              conditional: (
                <TextInput
                  id="contact-by-phone"
                  name="contactByPhone"
                  label="Phone number"
                  widthClass="govuk-input--width-20"
                  type="tel"
                />
              ),
            },
            {
              value: "text",
              text: "Text message",
              conditional: (
                <TextInput
                  id="contact-by-text"
                  name="contactByText"
                  label="Mobile number"
                  widthClass="govuk-input--width-20"
                  type="tel"
                />
              ),
            },
          ]}
        />

        <h4 className="govuk-heading-s govuk-!-margin-top-8">Smaller radios</h4>
        <Radios
          name="sort"
          legend="Sort by"
          small
          items={[
            { value: "updated", text: "Recently updated" },
            { value: "created", text: "Recently created" },
            { value: "name", text: "Name" },
          ]}
        />

        <h4 className="govuk-heading-s govuk-!-margin-top-8">
          Disabled radios
        </h4>
        <Radios
          name="accountStatus"
          legend="Choose an account type"
          items={[
            { value: "standard", text: "Standard" },
            { value: "premium", text: "Premium", disabled: true },
            { value: "admin", text: "Admin" },
          ]}
        />

        <h4 className="govuk-heading-s govuk-!-margin-top-8">
          Radios with error
        </h4>
        <Radios
          name="whereDoYouLiveError"
          legend="Where do you live?"
          error="Select where you live"
          items={[
            { value: "england", text: "England" },
            { value: "scotland", text: "Scotland" },
            { value: "wales", text: "Wales" },
            { value: "northern-ireland", text: "Northern Ireland" },
          ]}
        />
      </section>

      <section
        className="govuk-!-margin-bottom-8"
        aria-labelledby="checkboxes-section"
      >
        <h3 id="checkboxes-section" className="govuk-heading-m">
          Checkboxes
        </h3>

        <h4 className="govuk-heading-s">Standard checkboxes</h4>
        <Checkboxes
          name="nationality"
          legend="What is your nationality?"
          items={[
            { value: "british", text: "British" },
            { value: "irish", text: "Irish" },
            {
              value: "citizen-of-another-country",
              text: "Citizen of another country",
            },
          ]}
          values={selectedNationalities}
          onChange={handleCheckboxChange(setSelectedNationalities)}
          isPageHeading
        />

        <h4 className="govuk-heading-s govuk-!-margin-top-8">
          Checkboxes with hints
        </h4>
        <Checkboxes
          name="contact-preferences"
          legend="How would you like to receive updates?"
          items={[
            { value: "email", text: "Email" },
            { value: "text", text: "Text message" },
            { value: "phone", text: "Phone" },
          ]}
          values={selectedContactPreferences}
          onChange={handleCheckboxChange(setSelectedContactPreferences)}
        />

        <h4 className="govuk-heading-s govuk-!-margin-top-8">
          Checkboxes with a divider and exclusive option
        </h4>
        <Checkboxes
          name="channels"
          legend="Which channels do you use to contact us?"
          values={selectedChannels}
          onChange={handleCheckboxChange(setSelectedChannels)}
          items={[
            { value: "email", text: "Email" },
            { value: "phone", text: "Phone" },
            { value: "post", text: "Post" },
            { divider: "or" },
            { value: "none", text: "None of these", exclusive: true },
          ]}
        />

        <h4 className="govuk-heading-s govuk-!-margin-top-8">
          Checkboxes with conditionally revealed content
        </h4>
        <Checkboxes
          name="contact-details"
          legend="How should we contact you?"
          values={selectedContactDetails}
          onChange={handleCheckboxChange(setSelectedContactDetails)}
          items={[
            {
              value: "email",
              text: "Email",
              conditional: (
                <TextInput
                  id="checkbox-contact-by-email"
                  name="checkboxContactByEmail"
                  label="Email address"
                  widthClass="govuk-input--width-20"
                  type="email"
                />
              ),
            },
            {
              value: "phone",
              text: "Phone",
              conditional: (
                <TextInput
                  id="checkbox-contact-by-phone"
                  name="checkboxContactByPhone"
                  label="Phone number"
                  widthClass="govuk-input--width-20"
                  type="tel"
                />
              ),
            },
          ]}
        />

        <h4 className="govuk-heading-s govuk-!-margin-top-8">
          Smaller checkboxes
        </h4>
        <Checkboxes
          name="filters"
          legend="Filter results by"
          small
          items={[
            { value: "open", text: "Open" },
            { value: "closed", text: "Closed" },
            { value: "archived", text: "Archived" },
          ]}
          values={selectedFilters}
          onChange={handleCheckboxChange(setSelectedFilters)}
        />

        <h4 className="govuk-heading-s govuk-!-margin-top-8">
          Disabled checkboxes
        </h4>
        <Checkboxes
          name="account-permissions"
          legend="Which permissions do you need?"
          items={[
            { value: "read", text: "Read" },
            { value: "write", text: "Write", disabled: true },
            { value: "admin", text: "Admin" },
          ]}
          values={selectedAccountPermissions}
          onChange={handleCheckboxChange(setSelectedAccountPermissions)}
        />

        <h4 className="govuk-heading-s govuk-!-margin-top-8">
          Checkboxes with error
        </h4>
        <Checkboxes
          name="topics"
          legend="Which topics do you want updates about?"
          error="Select at least one topic"
          items={[
            { value: "service-updates", text: "Service updates" },
            { value: "policy-changes", text: "Policy changes" },
            { value: "research", text: "Research and insights" },
          ]}
        />
      </section>

      <section
        className="govuk-!-margin-bottom-8"
        aria-labelledby="error-summary-section"
      >
        <h3 id="error-summary-section" className="govuk-heading-m">
          ErrorSummary
        </h3>

        <ErrorSummary
          errors={[
            {
              href: "#national-insurance-number",
              text: "Enter your National Insurance number",
            },
            {
              href: "#date-of-birth-day",
              text: "Date of birth must be in the past",
            },
          ]}
        />
      </section>

      <section
        className="govuk-!-margin-bottom-8"
        aria-labelledby="inset-text-section"
      >
        <h3 id="inset-text-section" className="govuk-heading-m">
          InsetText
        </h3>

        <InsetText>This service is also available in Welsh.</InsetText>
      </section>

      <section
        className="govuk-!-margin-bottom-8"
        aria-labelledby="warning-text-section"
      >
        <h3 id="warning-text-section" className="govuk-heading-m">
          WarningText
        </h3>

        <WarningText>
          You can be fined up to £5,000 if you do not register.
        </WarningText>

        <div className="govuk-!-margin-top-4">
          <WarningText iconFallbackText="Important">
            This service will time out after 30 minutes of inactivity.
          </WarningText>
        </div>
      </section>

      <section
        className="govuk-!-margin-bottom-8"
        aria-labelledby="summary-list-section"
      >
        <h3 id="summary-list-section" className="govuk-heading-m">
          SummaryList
        </h3>

        <h4 className="govuk-heading-s">Standard summary list</h4>
        <SummaryList
          rows={[
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
          ]}
        />

        <h4 className="govuk-heading-s govuk-!-margin-top-8">
          Mixed rows, multiple actions and missing information
        </h4>
        <SummaryList
          rows={[
            {
              key: { text: "Contact details" },
              value: {
                html: (
                  <>
                    <p className="govuk-body">07700 900457</p>
                    <p className="govuk-body">sarah.phillips@example.com</p>
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
          ]}
        />

        <h4 className="govuk-heading-s govuk-!-margin-top-8">Summary card</h4>
        <SummaryList
          card={{
            title: {
              text: "University of Gloucestershire",
              headingLevel: 2,
            },
            actions: {
              items: [
                {
                  href: "/delete-choice",
                  text: "Delete choice",
                  visuallyHiddenText: "(University of Gloucestershire)",
                },
                {
                  href: "/withdraw-choice",
                  text: "Withdraw",
                  visuallyHiddenText: "(University of Gloucestershire)",
                },
              ],
            },
          }}
          rows={[
            {
              key: { text: "Course" },
              value: { text: "English literature" },
            },
            {
              key: { text: "Location" },
              value: { text: "Main site" },
            },
          ]}
        />
      </section>

      <section
        className="govuk-!-margin-bottom-8"
        aria-labelledby="skip-link-section"
      >
        <h3 id="skip-link-section" className="govuk-heading-m">
          SkipLink
        </h3>
        <p className="govuk-body">
          Skip links help keyboard and screen reader users move straight to the
          main content.
        </p>

        <SkipLink href="#main-content" />
      </section>

      <section
        className="govuk-!-margin-bottom-8"
        aria-labelledby="breadcrumbs-section"
      >
        <h3 id="breadcrumbs-section" className="govuk-heading-m">
          Breadcrumbs
        </h3>

        <div className="govuk-!-margin-bottom-6">
          <Breadcrumbs
            items={[
              { text: "Home", href: "/" },
              { text: "Passports, travel and living abroad", href: "/travel" },
              { text: "Travel abroad", href: "/travel-abroad" },
              { text: "Current page", current: true },
            ]}
          />
        </div>

        <Breadcrumbs
          collapseOnMobile
          items={[
            { text: "Home", href: "/" },
            { text: "Education and learning", href: "/education" },
            { text: "Student finance", current: true },
          ]}
        />
      </section>

      <section
        className="govuk-!-margin-bottom-8"
        aria-labelledby="accordion-section"
      >
        <h3 id="accordion-section" className="govuk-heading-m">
          Accordion
        </h3>

        <Accordion
          id="service-process-accordion"
          sections={[
            {
              heading: "Get proof of your identity",
              summary: "You can use a GOV.UK One Login or a photo ID document.",
              content: (
                <>
                  <p className="govuk-body">
                    You’ll need to prove your identity before you can continue.
                  </p>
                  <ul className="govuk-list govuk-list--bullet">
                    <li>passport</li>
                    <li>driving licence</li>
                    <li>biometric residence permit</li>
                  </ul>
                </>
              ),
              expanded: true,
            },
            {
              heading: "Complete the application",
              summary: "Fill in the online form and review your answers.",
              content: (
                <p className="govuk-body">
                  Save your progress if you need to come back later.
                </p>
              ),
            },
          ]}
        />
      </section>

      <section
        className="govuk-!-margin-bottom-8"
        aria-labelledby="character-count-section"
      >
        <h3 id="character-count-section" className="govuk-heading-m">
          CharacterCount
        </h3>

        <div className="govuk-!-margin-bottom-6">
          <CharacterCount
            id="more-detail"
            name="moreDetail"
            label="Can you provide more detail?"
            hint="Do not include personal or financial information."
            maxLength={200}
            value={characterCountText}
            onChange={(event) => setCharacterCountText(event.target.value)}
          />
        </div>

        <CharacterCount
          id="describe-problem"
          name="describeProblem"
          label="Describe the problem"
          maxWords={50}
        />
      </section>

      <section
        className="govuk-!-margin-bottom-8"
        aria-labelledby="cookie-banner-section"
      >
        <h3 id="cookie-banner-section" className="govuk-heading-m">
          CookieBanner
        </h3>

        <CookieBanner
          messages={[
            {
              heading: "Cookies on this service",
              children: (
                <>
                  <p className="govuk-body">
                    We use some essential cookies to make this service work.
                  </p>
                  <p className="govuk-body">
                    We’d also like to use analytics cookies so we can understand
                    how you use the service and improve it.
                  </p>
                </>
              ),
              actions: [
                { text: "Accept analytics cookies" },
                { text: "Reject analytics cookies" },
                { text: "View cookies", href: "/cookies" },
              ],
            },
            {
              heading: "Your cookie settings were saved",
              hidden: true,
              children: (
                <p className="govuk-body">
                  Government services may set additional cookies and, if so,
                  will have their own cookie policy and banner.
                </p>
              ),
              actions: [{ text: "Hide this message" }],
            },
          ]}
        />
      </section>

      <section
        className="govuk-!-margin-bottom-8"
        aria-labelledby="details-section"
      >
        <h3 id="details-section" className="govuk-heading-m">
          Details
        </h3>

        <Details summary="Help with nationality">
          You can select more than one option if you have dual nationality.
        </Details>
      </section>

      <section
        className="govuk-!-margin-bottom-8"
        aria-labelledby="error-message-section"
      >
        <h3 id="error-message-section" className="govuk-heading-m">
          ErrorMessage
        </h3>

        <ErrorMessage>Enter your full name</ErrorMessage>
      </section>

      <section
        className="govuk-!-margin-bottom-8"
        aria-labelledby="exit-this-page-section"
      >
        <h3 id="exit-this-page-section" className="govuk-heading-m">
          ExitThisPage
        </h3>

        <ExitThisPage href="/leave" text="Exit this page" />
      </section>

      <section
        className="govuk-!-margin-bottom-8"
        aria-labelledby="file-upload-section"
      >
        <h3 id="file-upload-section" className="govuk-heading-m">
          FileUpload
        </h3>

        <div className="govuk-!-margin-bottom-6">
          <FileUpload
            id="passport-scan"
            name="passportScan"
            label="Upload a copy of your passport"
            hint="The file must be a JPG, BMP, PNG, TIF or PDF."
          />
        </div>

        <FileUpload
          id="evidence-file"
          name="evidenceFile"
          label="Upload evidence"
          error="Select a file to upload"
        />
      </section>

      <section
        className="govuk-!-margin-bottom-8"
        aria-labelledby="notification-banner-section"
      >
        <h3 id="notification-banner-section" className="govuk-heading-m">
          NotificationBanner
        </h3>

        <div className="govuk-!-margin-bottom-6">
          <NotificationBanner title="Important" heading="Important">
            <p className="govuk-body">
              You have 7 days left to send supporting documents.
            </p>
          </NotificationBanner>
        </div>

        <NotificationBanner
          success
          title="Success"
          heading="Application complete"
        >
          <p className="govuk-body">Your reference number is HDJ2123F.</p>
        </NotificationBanner>
      </section>

      <section
        className="govuk-!-margin-bottom-8"
        aria-labelledby="pagination-section"
      >
        <h3 id="pagination-section" className="govuk-heading-m">
          Pagination
        </h3>

        <div className="govuk-!-margin-bottom-6">
          <Pagination
            previous={{ href: "/page/1", label: "1 of 3" }}
            next={{ href: "/page/3", label: "3 of 3" }}
          />
        </div>

        <Pagination
          previous={{ href: "/page/1", label: "1 of 5" }}
          next={{ href: "/page/3", label: "3 of 5" }}
          items={[
            { number: 1, href: "/page/1" },
            { number: 2, href: "/page/2", current: true },
            { ellipsis: true, number: 0 },
            { number: 5, href: "/page/5" },
          ]}
        />
      </section>

      <section
        className="govuk-!-margin-bottom-8"
        aria-labelledby="panel-section"
      >
        <h3 id="panel-section" className="govuk-heading-m">
          Panel
        </h3>

        <Panel title="Application complete">
          Your reference number
          <br />
          <strong>HDJ2123F</strong>
        </Panel>
      </section>

      <section
        className="govuk-!-margin-bottom-8"
        aria-labelledby="password-input-section"
      >
        <h3 id="password-input-section" className="govuk-heading-m">
          PasswordInput
        </h3>

        <div className="govuk-!-margin-bottom-6">
          <PasswordInput
            id="account-password"
            name="accountPassword"
            label="Create a password"
            hint="It must contain at least 12 characters."
          />
        </div>

        <PasswordInput
          id="confirm-password"
          name="confirmPassword"
          label="Confirm your password"
          error="Passwords must match"
        />
      </section>

      <section
        className="govuk-!-margin-bottom-8"
        aria-labelledby="phase-banner-section"
      >
        <h3 id="phase-banner-section" className="govuk-heading-m">
          PhaseBanner
        </h3>

        <PhaseBanner phase="beta">
          This is a new service – your{" "}
          <a href="/feedback" className="govuk-link">
            feedback
          </a>{" "}
          will help us improve it.
        </PhaseBanner>
      </section>

      <section
        className="govuk-!-margin-bottom-8"
        aria-labelledby="select-section"
      >
        <h3 id="select-section" className="govuk-heading-m">
          Select
        </h3>

        <div className="govuk-!-margin-bottom-6">
          <Select
            id="sort-by"
            name="sortBy"
            label="Sort by"
            items={[
              { value: "", text: "Select one" },
              { value: "updated", text: "Recently updated" },
              { value: "created", text: "Recently created" },
              { value: "name", text: "Name" },
            ]}
          />
        </div>

        <Select
          id="country"
          name="country"
          label="Country"
          hint="Select the country where you live."
          items={[
            { value: "", text: "Select a country" },
            { value: "england", text: "England" },
            { value: "scotland", text: "Scotland" },
            { value: "wales", text: "Wales" },
            { value: "northern-ireland", text: "Northern Ireland" },
          ]}
        />
      </section>

      <section
        className="govuk-!-margin-bottom-8"
        aria-labelledby="table-section"
      >
        <h3 id="table-section" className="govuk-heading-m">
          Table
        </h3>

        <div className="govuk-!-margin-bottom-6">
          <Table
            caption="Months and rates"
            head={{
              cells: [
                { content: "Month" },
                { content: "Rate", format: "numeric" },
              ],
            }}
            rows={[
              {
                cells: [
                  { content: "January" },
                  { content: "£85", format: "numeric" },
                ],
              },
              {
                cells: [
                  { content: "February" },
                  { content: "£75", format: "numeric" },
                ],
              },
              {
                cells: [
                  { content: "March" },
                  { content: "£90", format: "numeric" },
                ],
              },
            ]}
          />
        </div>

        <Table
          caption="People added to the application"
          firstCellIsHeader
          rows={[
            {
              cells: [
                { content: "Jane Smith" },
                { content: "Main applicant" },
                { content: "Complete" },
              ],
            },
            {
              cells: [
                { content: "Ahmed Khan" },
                { content: "Partner" },
                { content: "Incomplete" },
              ],
            },
          ]}
        />
      </section>

      <section
        className="govuk-!-margin-bottom-8"
        aria-labelledby="tabs-section"
      >
        <h3 id="tabs-section" className="govuk-heading-m">
          Tabs
        </h3>

        <Tabs
          items={[
            {
              id: "past-day",
              label: "Past day",
              panel: (
                <>
                  <h4 className="govuk-heading-s">Past day</h4>
                  <p className="govuk-body">
                    There were 3 updates in the last 24 hours.
                  </p>
                </>
              ),
            },
            {
              id: "past-week",
              label: "Past week",
              panel: (
                <>
                  <h4 className="govuk-heading-s">Past week</h4>
                  <p className="govuk-body">
                    There were 12 updates in the last 7 days.
                  </p>
                </>
              ),
            },
            {
              id: "past-month",
              label: "Past month",
              panel: (
                <>
                  <h4 className="govuk-heading-s">Past month</h4>
                  <p className="govuk-body">
                    There were 48 updates in the last 30 days.
                  </p>
                </>
              ),
            },
          ]}
        />
      </section>

      <section
        className="govuk-!-margin-bottom-8"
        aria-labelledby="tag-section"
      >
        <h3 id="tag-section" className="govuk-heading-m">
          Tag
        </h3>

        <div className="govuk-button-group">
          <Tag>Inactive</Tag>
          <Tag colour="green">Active</Tag>
          <Tag colour="blue">Received</Tag>
          <Tag colour="red">Rejected</Tag>
          <Tag colour="yellow">Warning</Tag>
        </div>
      </section>

      <section
        className="govuk-!-margin-bottom-8"
        aria-labelledby="task-list-section"
      >
        <h3 id="task-list-section" className="govuk-heading-m">
          TaskList
        </h3>

        <TaskList
          items={[
            {
              id: "company-details",
              title: "Company details",
              href: "/company-details",
              hint: "Includes registration number and registered office address",
              status: (
                <strong className="govuk-tag govuk-tag--blue">
                  Incomplete
                </strong>
              ),
            },
            {
              id: "financial-history",
              title: "Financial history",
              href: "/financial-history",
              status: "Completed",
            },
            {
              id: "supporting-documents",
              title: "Supporting documents",
              href: "/supporting-documents",
              hint: "Upload accounts and proof of address",
              status: "Not started",
            },
          ]}
        />
      </section>

      <section
        className="govuk-!-margin-bottom-8"
        aria-labelledby="textarea-section"
      >
        <h3 id="textarea-section" className="govuk-heading-m">
          Textarea
        </h3>

        <div className="govuk-!-margin-bottom-6">
          <Textarea
            id="more-information"
            name="moreInformation"
            label="Give more detail"
            hint="Include anything else we need to know."
          />
        </div>

        <Textarea
          id="reason-for-appeal"
          name="reasonForAppeal"
          label="Why are you appealing?"
          error="Enter the reason for your appeal"
        />
      </section>

      <section
        className="govuk-!-margin-bottom-8"
        aria-labelledby="footer-section"
      >
        <h3 id="footer-section" className="govuk-heading-m">
          GovUkFooter
        </h3>

        <GovUkFooter />
      </section>

      <section
        className="govuk-!-margin-bottom-8"
        aria-labelledby="footer-links-section"
      >
        <h3 id="footer-links-section" className="govuk-heading-m">
          GovUkFooter - Links
        </h3>

        <GovUkFooter
          meta={{
            items: [
              { text: "Help", href: "/help" },
              { text: "Cookies", href: "/cookies" },
              { text: "Accessibility", href: "/accessibility" },
            ],
          }}
        />
      </section>

      <section
        className="govuk-!-margin-bottom-8"
        aria-labelledby="footer-navigation-links-section"
      >
        <h3 id="footer-navigation-links-section" className="govuk-heading-m">
          GovUkFooter - Navigation and links
        </h3>

        <GovUkFooter
          navigation={[
            {
              title: "Services and information",
              items: [
                { text: "Benefits", href: "/benefits" },
                { text: "Business and self-employed", href: "/business" },
              ],
              width: "one-half",
            },
            {
              title: "Government activity",
              items: [
                { text: "Departments", href: "/departments" },
                { text: "News", href: "/news" },
              ],
              width: "one-half",
            },
          ]}
          meta={{
            items: [
              { text: "Help", href: "/help" },
              { text: "Cookies", href: "/cookies" },
              { text: "Accessibility", href: "/accessibility" },
            ],
          }}
        />
      </section>
    </>
  );
}
