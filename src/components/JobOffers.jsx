import Offer from "./Offer";

function JobOffers({ data }) {
  return (
    <section style={{ paddingTop: "100px" }}>
      {data.map((offer) => (
        <Offer
          key={offer.id}
          company={offer.company}
          logo={offer.logo}
          date={offer.new}
          featured={offer.featured}
          position={offer.position}
          role={offer.role}
          level={offer.level}
          postedAt={offer.postedAt}
          contract={offer.contract}
          location={offer.location}
          languages={offer.languages}
          tools={offer.tools}
        />
      ))}
    </section>
  );
}

export default JobOffers;
