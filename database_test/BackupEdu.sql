--
-- PostgreSQL database dump
--

-- Dumped from database version 9.4.4
-- Dumped by pg_dump version 9.4.4
-- Started on 2015-08-05 19:23:58 EDT

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;

--
-- TOC entry 182 (class 3079 OID 12123)
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- TOC entry 2312 (class 0 OID 0)
-- Dependencies: 182
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

--
-- TOC entry 548 (class 1247 OID 16435)
-- Name: enum_assessment_assessment_type; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE enum_assessment_assessment_type AS ENUM (
    'midterm',
    'test',
    'exam'
);


ALTER TYPE enum_assessment_assessment_type OWNER TO postgres;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 181 (class 1259 OID 16443)
-- Name: assessment; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE assessment (
    id integer NOT NULL,
    assessment_type enum_assessment_assessment_type,
    grade double precision NOT NULL,
    weight double precision NOT NULL,
    user_id integer,
    course_id integer
);


ALTER TABLE assessment OWNER TO postgres;

--
-- TOC entry 180 (class 1259 OID 16441)
-- Name: assessment_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE assessment_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE assessment_id_seq OWNER TO postgres;

--
-- TOC entry 2313 (class 0 OID 0)
-- Dependencies: 180
-- Name: assessment_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE assessment_id_seq OWNED BY assessment.id;


--
-- TOC entry 177 (class 1259 OID 16407)
-- Name: course; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE course (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    course_code character varying(255) NOT NULL,
    faculty character varying(255) NOT NULL,
    program_name character varying(255) NOT NULL
);


ALTER TABLE course OWNER TO postgres;

--
-- TOC entry 176 (class 1259 OID 16405)
-- Name: course_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE course_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE course_id_seq OWNER TO postgres;

--
-- TOC entry 2314 (class 0 OID 0)
-- Dependencies: 176
-- Name: course_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE course_id_seq OWNED BY course.id;


--
-- TOC entry 179 (class 1259 OID 16418)
-- Name: course_user; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE course_user (
    id integer NOT NULL,
    user_id integer,
    course_id integer
);


ALTER TABLE course_user OWNER TO postgres;

--
-- TOC entry 178 (class 1259 OID 16416)
-- Name: course_user_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE course_user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE course_user_id_seq OWNER TO postgres;

--
-- TOC entry 2315 (class 0 OID 0)
-- Dependencies: 178
-- Name: course_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE course_user_id_seq OWNED BY course_user.id;


--
-- TOC entry 175 (class 1259 OID 16396)
-- Name: user; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE "user" (
    id integer NOT NULL,
    first_name character varying(255) NOT NULL,
    last_name character varying(255) NOT NULL,
    email_address character varying(255) NOT NULL,
    password character varying(255) NOT NULL
);


ALTER TABLE "user" OWNER TO postgres;

--
-- TOC entry 174 (class 1259 OID 16394)
-- Name: user_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE user_id_seq OWNER TO postgres;

--
-- TOC entry 2316 (class 0 OID 0)
-- Dependencies: 174
-- Name: user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE user_id_seq OWNED BY "user".id;


--
-- TOC entry 2175 (class 2604 OID 16446)
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY assessment ALTER COLUMN id SET DEFAULT nextval('assessment_id_seq'::regclass);


--
-- TOC entry 2173 (class 2604 OID 16410)
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY course ALTER COLUMN id SET DEFAULT nextval('course_id_seq'::regclass);


--
-- TOC entry 2174 (class 2604 OID 16421)
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY course_user ALTER COLUMN id SET DEFAULT nextval('course_user_id_seq'::regclass);


--
-- TOC entry 2172 (class 2604 OID 16399)
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "user" ALTER COLUMN id SET DEFAULT nextval('user_id_seq'::regclass);


--
-- TOC entry 2304 (class 0 OID 16443)
-- Dependencies: 181
-- Data for Name: assessment; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY assessment (id, assessment_type, grade, weight, user_id, course_id) FROM stdin;
\.


--
-- TOC entry 2317 (class 0 OID 0)
-- Dependencies: 180
-- Name: assessment_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('assessment_id_seq', 1, false);


--
-- TOC entry 2300 (class 0 OID 16407)
-- Dependencies: 177
-- Data for Name: course; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY course (id, name, course_code, faculty, program_name) FROM stdin;
1	Calculus	1	Science	Math
2	Physics	2	Science	Physics
\.


--
-- TOC entry 2318 (class 0 OID 0)
-- Dependencies: 176
-- Name: course_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('course_id_seq', 1, false);


--
-- TOC entry 2302 (class 0 OID 16418)
-- Dependencies: 179
-- Data for Name: course_user; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY course_user (id, user_id, course_id) FROM stdin;
1	1	1
2	1	2
\.


--
-- TOC entry 2319 (class 0 OID 0)
-- Dependencies: 178
-- Name: course_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('course_user_id_seq', 1, false);


--
-- TOC entry 2298 (class 0 OID 16396)
-- Dependencies: 175
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY "user" (id, first_name, last_name, email_address, password) FROM stdin;
1	test	test	test	test
2	first	last	email	password
\.


--
-- TOC entry 2320 (class 0 OID 0)
-- Dependencies: 174
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('user_id_seq', 2, true);


--
-- TOC entry 2183 (class 2606 OID 16448)
-- Name: assessment_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY assessment
    ADD CONSTRAINT assessment_pkey PRIMARY KEY (id);


--
-- TOC entry 2179 (class 2606 OID 16415)
-- Name: course_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY course
    ADD CONSTRAINT course_pkey PRIMARY KEY (id);


--
-- TOC entry 2181 (class 2606 OID 16423)
-- Name: course_user_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY course_user
    ADD CONSTRAINT course_user_pkey PRIMARY KEY (id);


--
-- TOC entry 2177 (class 2606 OID 16404)
-- Name: user_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY "user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);


--
-- TOC entry 2187 (class 2606 OID 16454)
-- Name: assessment_course_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY assessment
    ADD CONSTRAINT assessment_course_id_fkey FOREIGN KEY (course_id) REFERENCES course(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 2186 (class 2606 OID 16449)
-- Name: assessment_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY assessment
    ADD CONSTRAINT assessment_user_id_fkey FOREIGN KEY (user_id) REFERENCES "user"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 2185 (class 2606 OID 16429)
-- Name: course_user_course_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY course_user
    ADD CONSTRAINT course_user_course_id_fkey FOREIGN KEY (course_id) REFERENCES course(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 2184 (class 2606 OID 16424)
-- Name: course_user_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY course_user
    ADD CONSTRAINT course_user_user_id_fkey FOREIGN KEY (user_id) REFERENCES "user"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 2311 (class 0 OID 0)
-- Dependencies: 5
-- Name: public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM postgres;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO PUBLIC;


-- Completed on 2015-08-05 19:23:58 EDT

--
-- PostgreSQL database dump complete
--

