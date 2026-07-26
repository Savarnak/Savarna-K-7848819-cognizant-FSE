# Week 5 - Angular Hands-ons

## Hands-On 1 - Project Setup

### Task 1
- Created Angular standalone project.
- Explored Angular project structure.
- Generated Header, Home, Course List, Course Detail, Student Profile, and Enrollment components.
- Configured application routing.
- Successfully ran the application using `ng serve`.
- Successfully built the project using `ng build`.

---

## Hands-On 2 - Data Binding & Lifecycle Hooks

### Task 1 - Data Binding
- Implemented string interpolation.
- Implemented property binding.
- Implemented event binding.
- Implemented two-way data binding using `ngModel`.
- Added course search and enrollment interactions.

### Task 2 - Lifecycle Hooks
- Implemented `ngOnInit()`.
- Implemented `ngOnDestroy()`.
- Implemented `ngOnChanges()`.
- Created reusable `CourseCard` component.
- Displayed course details using `@Input()`.
- Verified lifecycle hook execution using browser console.

### Task 3 - Parent-Child Communication
- Implemented `@Output()` using `EventEmitter`.
- Passed selected course information from child to parent.
- Displayed selected course after enrollment.

---

## Hands-On 3 - Directives & Pipes

### Task 1 - Structural Directives
- Implemented conditional rendering using `@if`.
- Displayed loading indicator.
- Rendered course list using `@for`.
- Implemented `trackBy` for efficient rendering.
- Used `@switch` for course status.
- Displayed fallback message when no courses were available.

### Task 2 - Attribute Directives
- Implemented `ngClass`.
- Implemented `ngStyle`.
- Added expandable course cards.
- Used computed getter for dynamic CSS classes.

### Task 3 - Custom Directive & Pipe
- Created custom Highlight directive.
- Added configurable hover highlighting.
- Created custom CreditLabel pipe.
- Displayed formatted course credits.

---

## Hands-On 4 - Template-Driven Forms

### Task 1
- Created Template-Driven Enrollment Form.
- Used `ngForm` and `ngModel`.
- Logged submitted form values.

### Task 2
- Added form validation.
- Displayed validation messages.
- Styled valid and invalid controls.
- Added success message.
- Implemented Reset functionality.

---

## Hands-On 5 - Reactive Forms

### Task 1
- Created Reactive Enrollment Form using `FormGroup` and `FormControl`.
- Applied built-in validators.
- Displayed validation messages.
- Implemented dynamic `FormArray` for additional courses.
- Logged form values to browser console.
- Implemented form submission and reset.

---

## Hands-On 6 - Dependency Injection & Services

### Task 1
- Created reusable Angular services.
- Injected services using Angular Dependency Injection.
- Demonstrated singleton services.

### Task 2
- Implemented Notification Service.
- Implemented Loading Service.
- Used component-level and root-level service providers.
- Displayed notification messages across components.

---

## Hands-On 7 - Routing & Navigation

### Task 1
- Configured Angular Router.
- Implemented nested routing.
- Implemented lazy loading for Enrollment module.
- Added route parameters.
- Implemented query parameters.
- Added navigation between pages.

### Task 2
- Implemented Authentication Guard.
- Implemented Unsaved Changes Guard.
- Protected routes using `canActivate`.
- Protected forms using `canDeactivate`.

---

## Hands-On 8 - HTTP Communication

### Task 1
- Integrated JSON Server.
- Retrieved course data using `HttpClient`.
- Implemented CRUD operations.
- Used RxJS Observables.

### Task 2
- Implemented HTTP Interceptors.
- Added Authorization header.
- Implemented global error handling.
- Added loading indicator using interceptor.
- Verified HTTP requests using browser Network tab.

---

## Hands-On 9 - State Management using NgRx

### Task 1
- Installed NgRx Store and Effects.
- Configured global application store.
- Created Course Actions.
- Created Course Reducer.
- Created Course Selectors.
- Created Course Effects.
- Registered NgRx Store providers.

### Task 2
- Connected Course List component with NgRx Store.
- Loaded course data through Effects.
- Managed application state using Store.
- Implemented Enrollment Store.
- Managed enrollment state using Actions and Reducers.
- Verified dispatched actions using Redux DevTools.

---

## Hands-On 10 - Unit Testing

### Task 1 - Component Testing
- Configured Angular TestBed.
- Tested CourseCard component creation.
- Tested `@Input()` rendering.
- Tested `@Output()` event emission.
- Tested `ngOnChanges()` lifecycle hook.
- Used Jasmine spies and expectations.

### Task 2 - Service & Store Testing
- Tested CourseService using `HttpTestingController`.
- Verified HTTP requests and responses.
- Tested error handling scenarios.
- Tested NgRx-connected components using `MockStore`.
- Verified loading state and rendered output.
- Successfully executed all unit tests.

### Test Results
- **26 Test Files Passed**
- **35 Tests Passed**
- **0 Test Failures**

---

# Outputs

Execution screenshots are available in the `Outputs` folder.