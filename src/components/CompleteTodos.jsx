const style = {
  backgroundColor: "#ffffe0",
  width: "400px",
  minHeight: "200px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

const title = {
  textAlign: "center",
  marginTop: "0",
  fontWeight: "bold",
  color: "#666"
};

const listRow = {
  display: "flex",
  alignItems: "center"
};

export const CompleteTodos = (props) => {
  const { completeTodos, onClickBack } = props;
  return (
    <div style={style}>
      <p style={title}>完了のTODO</p>
      <ul>
        <li>
          {completeTodos.map((todo, index) => {
            return (
              <div key={todo} style={listRow}>
                <p>{todo}</p>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            );
          })}
        </li>
      </ul>
    </div>
  );
};
