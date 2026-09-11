type SectTaglineProps = {
  name: string;
  prominent?: boolean;
};

export function SectTagline({ name, prominent = false }: SectTaglineProps) {
  return (
    <>
      <div className="sect-tagline">
        <div className="container">
          <div className="sect-tagline_inner">
            <p
              className={`s-name text-caption font-2${prominent ? " is-prominent" : ""}`}
            >
              <span className="bar-group type-left">
                <span className="bar_center"></span>
              </span>
              <span className="hacker-text_transform no-delay">{name}</span>
              <span className="bar-group type-right">
                <span className="bar_center"></span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
