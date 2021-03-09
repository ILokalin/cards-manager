export const CardCommon = (props) => {
  const { firstName, lastName } = props;

  return (
    <article className="card p-4">
      <h3 className="card-title">
        {firstName}&nbsp;{lastName}
      </h3>

      {props.children}
    </article>
  );
};
