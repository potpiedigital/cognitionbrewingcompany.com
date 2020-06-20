import SingleStory from "../components/Single-story";

const Stories = () => {
  return (
    <section>
      <h1>More Stories</h1>
      <SingleStory
        image="https://source.unsplash.com/random"
        title="Story title Number 1"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur."
      />
      <SingleStory
        image="https://source.unsplash.com/random"
        title="Story title Number 2"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur."
      />
      <SingleStory
        image="https://source.unsplash.com/random"
        title="Story title Number 3"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur."
      />
      <SingleStory
        image="https://source.unsplash.com/random"
        title="Story title Number 4"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur."
      />
      <style jsx>{`
        section {
          width: 90vw;
          margin: 1em auto;
        }
      `}</style>
    </section>
  );
};

export default Stories;
