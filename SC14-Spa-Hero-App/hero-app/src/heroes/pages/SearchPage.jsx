import { HeroCard } from "../components/HeroCard";

export const SearchPage = () => {
  return (
    <>
      <h1>SearchPage</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <hr />
          <form>
            <input
              type="text"
              className="form-control"
              name="searchText"
              autoComplete="off"
              placeholder="search heroe"
            />
            <button className="btn btn-outline-primary mt-1">search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results:</h4>
          <hr />
          <div className="alert alert-primary">Search a heroe</div>
          <div className="alert alert-danger">
            There´s not <b>hero</b> name ...
          </div>
          {/*<HeroCard />*/}
        </div>
      </div>
    </>
  );
};
