# @rapido/components

This package includes a library of common primitive components used in [Rapido](https://github.com/rapidojs/rapido) apps.

Please refer to the Rapido documentation:

- [Getting Started](https://rapidojs.dev/docs/getting-started) – How to create a new app.
- [User Guide](https://rapidojs.dev/) – How to develop apps bootstrapped with Rapido.

## Installation

```
yarn add @rapido/components
```

## Getting Started

```jsx
import React from 'react';
import { Box, Heading, Button } from '@rapido/components';

export default props => (
  <Box>
    <Heading>Hello</Heading>
    <Button>Rapido</Button>
  </Box>
);
```

## API

This package includes the following availble components:

- [Box](#box) - Responsive box-model layout component
- [Text](#text) - Responsive typography component
- [Button](#button) - Button component with variants
- [Image](#image) - Responsive image component with variants

### Box

For full usage guide see the [documentation](https://rapidojs.dev/docs/components#box).

```jsx
<Box p={5} fontSize={4} color="white" bg="primary">
  <Text>Box</Text>
</Box>
```

### Text

For full usage guide see the [documentation](https://rapidojs.dev/docs/components#text).

```jsx
<Text fontWeight="bold" color="primary">
  Text
</Text>
```

### Button

For full usage guide see the [documentation](https://rapidojs.dev/docs/components#button).

```jsx
<Box>
  <Button variant="primary" mr={2}>
    Primary
  </Button>
  <Button variant="secondary" mr={2}>
    Secondary
  </Button>
  <Button variant="outline" mr={2}>
    Outline
  </Button>
</Box>
```

### Image

For full usage guide see the [documentation](https://rapidojs.dev/docs/components#image).

```jsx
<Image width={100} height={100} src={props.image} />
```
