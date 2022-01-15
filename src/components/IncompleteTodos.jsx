const style = {
  backgroundColor: "#c6ffe2",
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

export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div style={style}>
      <p style={title}>未完了のTODO</p>
      <ul>
        <li>
          {todos.map((todo, index) => {
            return (
              <div key={todo} style={listRow}>
                <p>{todo}</p>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </li>
      </ul>
    </div>
  );
};
