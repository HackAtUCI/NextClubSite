import PrimaryAnchor from "@/lib/components/PrimaryAnchor/PrimaryAnchor";
import Box from "@/lib/components/Box/Box";

export default function Sponsors() {
  return (
    <section className="py-30">
      <div className="flex justify-center items-center mt-4">
        <Box>
          <h2 className="text-subtitle mb-4">Our Sponsors</h2>
          <p className="mb-4 max-w-3xl">
            Hack at UCI&apos;s hackathons and events wouldn&apos;t be possible
            without our amazing sponsors that have helped us over the years.
            Each donation goes right back into creating an outstanding
            experience for everyone who attends.
          </p>
          <PrimaryAnchor href="/">More Information</PrimaryAnchor>
          {/* TODO: add sponsors in a grid or randomly like a messy mac home screen*/}
        </Box>
      </div>
    </section>
  );
}
