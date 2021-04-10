import "./Landing.css";

function Landing() {
  return (
    <div className="landing">
      <section>
        <h1>Wanderer</h1>
        <h2>
          Track your family and friends, without tracking your family and
          friends.
        </h2>
      </section>
      <section>
        <h3>What is this?</h3>
        <p>
          Wanderer was developed to bridge the gap between safety and privacy.
          Location awareness of friends and family can be a great safety tool.
          But knowing their exact location at all times can sometimes be a
          breach of privacy. Wanderer allows users to decide when to share their
          location with others, leaving a trail of breadcrumbs with their
          whereabouts.
        </p>
      </section>
      <section>
        <h3>How to use Wanderer</h3>
        <p>
          Users have the ability to create a group account...this would be a
          group of friends, family, or co-workers. Whenever a user logs in to
          the account, they will be able to see where other members have been by
          viewing their pinpoint locations. They will also have the ability to
          share their location at that specific time as well.
        </p>
      </section>
    </div>
  );
}

export default Landing;
