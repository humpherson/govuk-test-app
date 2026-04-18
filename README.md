# GOV.UK Test App

A **reference application** for validating and demonstrating the `govuk-react-adapter`.

This app is used to:

- ✅ Validate component behaviour
- ✅ Demonstrate GOV.UK page patterns
- ✅ Provide working examples of all components and variants
- ✅ Act as a **development sandbox**
- ✅ Support **Figma Make Kit testing and AI-generated UI**

---

## 🧠 Purpose

This is **not a production application**.

It is a:

> **Reference implementation and validation environment for a strict GOV.UK UI system**

It ensures that:

- Components behave as expected
- Patterns are implemented correctly
- Accessibility is preserved
- AI-generated output can be tested safely

---

## 🧱 Relationship to the Adapter

```id="m6g0c9"
govuk-react-adapter → provides components
govuk-test-app      → consumes and validates them
```

This app is the **ground truth** for:

- How components should be used
- How page patterns are composed
- What “correct GOV.UK UI” looks like in React

---

## 🏛 Design Philosophy

The app follows the same **Strict Mode A** principles:

- ❌ No custom styling
- ❌ No deviation from GOV.UK patterns
- ❌ No ad-hoc layouts

Instead:

- ✅ Page patterns are first-class
- ✅ Components are used predictably
- ✅ Everything is aligned to GOV.UK guidance

---

## ⚙️ Tech Stack

- React 18
- Vite
- TypeScript
- Tailwind CSS (utility support only)
- `govuk-react-adapter`
- `govuk-frontend` (CSS)

---

## 📦 Installation

```bash id="y4d0lp"
npm install
```

---

## 🚀 Running the app

```bash id="0d7z0m"
npm run dev
```

Then open:

```id="c7d7qk"
http://localhost:5173
```

---

## 🎨 GOV.UK styles

This app depends on GOV.UK frontend styles:

```bash id="2h6j8u"
npm install govuk-frontend
```

Imported globally:

```ts id="5m2z6t"
import "govuk-frontend/dist/govuk/govuk-frontend.min.css";
```

---

## 🧭 Application Structure

```id="0c9d0k"
src/
  pages/
    AllExamplesPage.tsx
    ComponentExamplesPage.tsx
    QuestionPageExamplesPage.tsx
    StartPageExamplesPage.tsx
    CheckAnswersPageExamplesPage.tsx
    ConfirmationPageExamplesPage.tsx
  components/
  main.tsx
```

---

## 📄 Routes

| Route                  | Purpose                   |
| ---------------------- | ------------------------- |
| `/all`                 | Everything combined       |
| `/components`          | All components + variants |
| `/question-pages`      | Question page patterns    |
| `/start-pages`         | Start page examples       |
| `/check-answers-pages` | Check answers patterns    |
| `/confirmation-pages`  | Confirmation patterns     |

---

## 🧩 What this app demonstrates

### 1. Components

- Inputs: `TextInput`, `Radios`, `Checkboxes`, `DateInput`, etc.
- Content: `InsetText`, `WarningText`
- Layout: `SummaryList`, `Table`, `Tabs`, etc.

Includes:

- Variations
- Edge cases
- Controlled + uncontrolled examples

---

### 2. Page Patterns

- `GovUkStartPage`
- `GovUkQuestionPage`
- `GovUkCheckAnswersPage`
- `GovUkConfirmationPage`

These are the **primary way to build UI**.

---

### 3. Controlled vs Uncontrolled Inputs

Examples demonstrate:

- Default GOV.UK behaviour (uncontrolled)
- React-controlled state (interactive examples)

---

### 4. Accessibility patterns

- Fieldset + legend usage
- Error summary linking
- Semantic structure

---

## 🔧 Working with the adapter locally

If developing the adapter and test app together:

### Link the adapter

```bash id="1h0g8y"
cd govuk-react-adapter
npm link

cd ../govuk-test-app
npm link @dan-humpherson/govuk-react-adapter
```

---

## ➕ Adding new examples

When adding a new component to the adapter:

### 1. Add it here

Update:

```id="2d9t5v"
ComponentExamplesPage.tsx
```

---

### 2. Include variations

- Default
- Error state
- Edge cases
- Controlled usage (if applicable)

---

### 3. Add page-level examples if needed

If it's part of a pattern:

- Add to `QuestionPageExamplesPage`
- Or relevant page

---

## ⚠️ Important constraints

### ❗ This app must stay “pure GOV.UK”

- No custom styles
- No experimental layouts
- No deviation from patterns

---

### ❗ Do not bypass page components

Avoid:

```tsx id="v4h9ab"
<div className="govuk-width-container">...</div>
```

Use:

```tsx id="vbxmrx"
<GovUkPageTemplate />
```

---

### ❗ Examples must be realistic

This app is used for:

- AI training
- Pattern validation

👉 Avoid fake or unrealistic UI

---

## 🚧 Known limitations

### 1. Not production-ready

- No routing guards
- No state persistence
- No backend integration

---

### 2. GOV.UK JS not fully included

Some behaviours may not match:

- Character count enhancements
- Details polyfills

---

### 3. Limited styling flexibility

- GOV.UK styles only
- Tailwind is not used for layout overrides

---

### 4. Accessibility depends on usage

The components are accessible, but:

- Incorrect usage can break this

---

## 🧠 AI / Figma Make usage

This app is used to:

- Test generated UI
- Validate component usage
- Refine Make Kit rules

It acts as:

> **The execution environment for AI-generated GOV.UK interfaces**

---

## 🔜 Roadmap

- Expand component coverage
- Add more realistic journeys
- Improve accessibility validation
- Add automated testing

---

## 🤝 Contributing

When updating this app:

- Follow GOV.UK patterns exactly
- Keep examples realistic
- Add variations where useful
- Keep structure consistent

---

## 📚 References

- GOV.UK Design System
  https://design-system.service.gov.uk/

- govuk-react-adapter
  https://github.com/humpherson/govuk-react-adapter

---

## 🧭 Summary

> This app is the **reference implementation** of the GOV.UK React Adapter.

It ensures:

- correctness
- consistency
- usability
- AI readiness

---

## 📄 License

MIT
