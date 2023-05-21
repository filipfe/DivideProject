const navigate = (to: string) => {
    const element = document.getElementById(to);
    element?.scrollIntoView({
      behavior: "smooth",
    });
};

export default navigate