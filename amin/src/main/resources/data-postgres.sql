

CREATE TABLE public."korisnici"
(
    prezime "string" NOT NULL,
    password "string" NOT NULL,
    ime "string" NOT NULL,
    id integer NOT NULL,
    email "string" NOT NULL,
    adresa "string" NOT NULL,
    grad "string" NOT NULL,
    telefon "string",
    CONSTRAINT "Korisnici_pkey" PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE public."korisnici"
    OWNER to postgres;


