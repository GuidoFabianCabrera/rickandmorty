function Status(x) {
  if (x === "Alive") {
    return "content__dot content__dot-live";
  } else if (x === "Dead") {
    return "content__dot content__dot-dead";
  } else {
    return "content__dot content__dot-unknown";
  }
}

export default Status;
