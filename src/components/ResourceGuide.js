function ResourceGuide() {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <h2 className="section-heading">Family Resource Guide</h2>
        <a
          href="/Media/Resources/Resources/FamilyResourceGuide.pdf"
          download="FamilyResourceGuide.pdf"
          className="download-link"
        >
          Download PDF
        </a>
      </div>
      <div
        className="pdf-viewer"
        style={{ marginTop: "20px", border: "1px solid #ddd" }}
      >
        <iframe
          src="/Media/Resources/Resources/FamilyResourceGuide.pdf"
          width="100%"
          height="800px"
          title="Family Resource Guide"
          style={{ border: "none" }}
        />
      </div>
    </div>
  );
}

export default ResourceGuide;
