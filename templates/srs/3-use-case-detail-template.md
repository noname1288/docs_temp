# Use Case: <Use Case Name>

**Use Case ID:** UC-XX  
**Version:** 1.0  
**Status:** Draft / In Review / Approved

---

## 1. Use Case Overview

**Use Case Name:** <Descriptive name of the use case>

**Brief Description:**
> Provide a concise one or two sentence description of what this use case accomplishes.

**Actor(s):**
- **Primary Actor:** <Main actor who initiates the use case>
- **Secondary Actor(s):** <Other actors involved, if any>

**Priority:** High / Medium / Low

**Preconditions:**
- Precondition 1
- Precondition 2

**Postconditions:**
- Postcondition 1
- Postcondition 2

**Trigger:**
> Describe the event that initiates this use case.

---

## 2. Main Success Scenario (Basic Flow)

> Describe the primary path through the use case when everything goes as expected.

1. <Actor> <action>
2. <System> <response>
3. <Actor> <action>
4. <System> <response>
5. <Use case ends successfully>

---

## 3. Alternative Flows

### 3.1 Alternative Flow A: <Flow Name>
**Condition:** <When this alternative occurs>

**Steps:**
1. <Step that differs from main flow>
2. <Continue with modified steps>
3. <Rejoin main flow at step X or end>

---

## 4. Exception Flows (Error Handling)

### 4.1 Exception A: <Exception Name>
**Condition:** <When this exception occurs>

**Steps:**
1. <System detects error>
2. <System handles error>
3. <System notifies actor or logs error>
4. <Flow ends or returns to step X>

---

## 5. Business Rules

| Rule ID | Description |
|---------|-------------|
| BR-XX-01 | <Business rule description> |

---

## 6. Functional Requirements

| Req ID | Requirement Description |
|--------|--------------------------|
| FR-XX-01 | <Functional requirement> |

---

## 7. Data Requirements

**Input Data:**
| Data Element | Type | Required | Validation Rules |
|--------------|------|----------|------------------|
| <Field Name> | <Type> | Yes/No | <Validation rules> |

**Output Data:**
| Data Element | Type | Description |
|--------------|------|-------------|
| <Field Name> | <Type> | <Description> |

---

## 8. User Interface Requirements

**Screen/Page:** <Screen name or ID>

**Key UI Elements:**
- <UI element 1>
- <UI element 2>

**UI Reference:** <Link to wireframe or mockup>

---

## 9. Related Use Cases

| Use Case ID | Relationship | Description |
|-------------|--------------|-------------|
| UC-YY | includes | <Description> |

---

## 10. Notes

> Record any additional remarks, open questions, or assumptions relevant to this use case.

---

## 11. Diagram

> Every use case includes at least one diagram. A **sequence diagram** is the default — it shows the message flow between the actor and the system across the basic, alternative, and exception flows. Use `alt/else` for branches and `Note over` for side effects. Use a **flowchart** instead when the use case is primarily decision logic.

```mermaid
sequenceDiagram
    actor Actor as <Actor Name>
    participant App as <App / Frontend>
    participant Device as <Device / Hardware>

    Actor->>App: <Action>
    alt <Condition met>
        App->>Device: <Command>
        Device-->>App: <Result>
        App-->>Actor: <Updated state>
    else <Condition not met>
        App-->>Actor: <Error message>
    end
    Note over Device,App: <Side effect / automatic behavior, if any>
```
