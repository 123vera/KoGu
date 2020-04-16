import React from 'react';

export default function ListItem({ item }) {
  return (
    <> {/* Fragment 简写为<> */}
      <dt>{item.term}</dt>
      <dd>{item.description}</dd>
    </>
  );
}