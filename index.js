const Button = (props) => {
  const { className, text } = props;
  return <button className={`button ${className}`}>{text}</button>;
};

const element = (
  <div className="bg-container">
    <h1 className="heading">Social Buttons</h1>
    <div className="all-container">
      <Button className="yellow" text="Like" />
      <Button className="white" text="Comment" />
      <Button className="blue" text="Share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
