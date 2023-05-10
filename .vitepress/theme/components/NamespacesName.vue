<template>
  <div class="api-icon-name">
    <table>
      <thead>
        <tr>
          <td>@api-provider</td>
          <td>:</td>
          <td>icon-prefix</td>
          <td>:</td>
          <td>icon-name</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <iconify-icon inline icon="line-md:navigation-left-up" />
            provider
          </td>
          <td />
          <td>
            <iconify-icon inline icon="line-md:navigation-left-up" />
            prefix
          </td>
          <td />
          <td>
            <iconify-icon inline icon="line-md:navigation-left-up" />
            name
          </td>
        </tr>
      </tbody>
    </table>
    <ul>
      <li>
        <span class="api-icon-name-provider">provider</span> points to API source.
        Starts with "<span class="hljs-string">@</span>", can be empty (empty
        value is used for public Iconify API).
      </li>
      <li>
        <span class="api-icon-name-prefix">prefix</span> is name of icon set.
      </li>
      <li><span class="api-icon-name-name">name</span> is name of icon.</li>
    </ul>
  </div>
</template>

<style lang="scss">
.api-icon-name {
  table, tr, td {
    border: none;
  }
  table {
    text-align: center;
  }
  tr {
    margin: 0;
    padding: 0;
  }
  td {
    margin: 0;
    padding: 0;
    color: var(--vp-c-text-2);
    position: relative;

    &:nth-child(2n) {
      padding: 0 0.25em;
    }
    &:first-child {
      color: var(--c-blue-gray);
    }
    &:nth-child(3) {
      color: var(--c-teal);
    }
    &:nth-child(5) {
      color: var(--c-blue);
    }
  }

  tbody {
    td {
      text-align: left;
    }
  }

  .api-icon-name-provider {
    color: var(--c-blue-gray);
  }
  .api-icon-name-prefix {
    color: var(--c-teal);
  }
  .api-icon-name-name {
    color: var(--c-blue-gray);
  }
}
</style>
