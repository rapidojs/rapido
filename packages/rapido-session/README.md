# @rapido/session

This package includes modules to manage session in [Rapido](https://github.com/rapidojs/rapido) apps.<br>
Please refer to its documentation:

- [Getting Started](https://rapidojs.dev/docs/getting-started) – How to create a new app.
- [Utils User Guide](https://rapidojs.dev/) – How to develop apps bootstrapped with Rapido.

## Installation

```
yarn add @rapido/session
```

## Getting Started

```jsx
// Root.jsx
import React from 'react';
import App from './App';
import { SessionProvider } from '@maxparelius/expo-session';

export default function Root() {
  return (
    <SessionProvider>
      <App />
    </SessionProvider>
  );
}
```

```jsx
// App.jsx
import React from 'react';
import { useSession } from '@maxparelius/expo-session';

import NameForm from './NameForm';

function App() {
  const [session, setSession] = useSession(['name']);

  function onChange(newName) {
    setSession('name', newName);
  }

  return (
    <div>
      <NameForm name={session.name} onChange={onChange} />
      {session.name && <h1>Hello {session.name}!</h1>}
    </div>
  );
}

export default App;
```

## API

There are core 4 modules included in `@rapido/session`:

- [Session](#session) - Class to manage accessing and storing session data
- [SessionProvider](#sessionprovider) - React provider component for passing a session instance to a React tree
- [useSession](#usesession) - React hook to access and modify session data
- [withSession](#withsession) - React HOC to access and modify session data

## Session

The session class manages accessing and storing session data. It ass the following methods:

### `constructor()`

Create a session context

### `get(name)`

Get a session value

- name (string): session value name

### `getAll()`

Get all session values

### `set(name, value)`

Set a session value

- name (string): session value name
- value (string|object): the value

### `remove(name)`

Remove a session value

- name (string): session value name

### `addChangeListener(callback)`

Add a listener to when a session value is set or removed.

- callback (function): Call that will be called with the first argument containing `name` and `value` of the changed session value.

### `removeChangeListener(callback)`

Remove a listener from the change callback.

## SessionProvider

A React provider class that passes a shared session instance to the React tree.

## useSession

A react hook to access and modify session data. It has the following call signiture:

```jsx
const [sessionValues, setSessionValue, removeSessionValue] = useSession([dependencies]]);
```

### `dependencies` (optional)

Let you optionally specify a list of session values your component depend on or that should trigger a re-render. If unspecified, it will render on every session value change.

### `sessionValues`

Javascript object with all your session data. The key is the value name.

### `setSessionValue(name, value)`

Set a session value

- name (string): session value name
- value (string|object): save the value and stringify the object if needed

### `removeSessionValue(name)`

Remove a session value

- name (string): session value name

## withSession

A react hoc that gives access to your session data anywhare by passing the following props to your component:

- **session**: Session instance allowing you to get, set and remove session data
- **sessionValues**: All your session values in an object
