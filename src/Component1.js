function App({ configData, data }) {
  return (
    <table style={{ width: "100%" }}>
      <thead>
        {configData.columns?.map((column) => (
          <th>{column.title}</th>
        ))}
      </thead>
      <tbody>
        {data.map((item) => (
          <tr>
            {configData.columns?.map((column) => (
              <td>
                {
                  column.key === configData.triggerKey ? (
                    <a href={`${data.baseUrl}/${data.triggerEndPoint}/${item[column.triggerKey]}`}>
                      {column.label}
                    </a>
                  ) : (
                    item[column.key]
                  )
                }
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default App;
