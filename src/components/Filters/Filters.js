import { useEffect, useState } from "react";
import style from "./Filters.module.css";
import { ReactComponent as Search } from "../../assets/search.svg";
import { ReactComponent as Arrow } from "../../assets/arrow.svg";
import {
  Checkbox,
  FormControlLabel,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { setFilters } from "../../features/hackathonSlice";

function Filters() {
  const [filterOpen, setFilterOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [level, setLevel] = useState("");
  const [status, setStatus] = useState("All");
  const dispatch = useDispatch();

  const toggleFilter = () => {
    setFilterOpen(!filterOpen); // Toggle the state of the filter panel between open and closed
  };

  const handleClose = () => {
    setFilterOpen(false); // set false when click
  };

  useEffect(() => {
    // Dispatch an action to update the filters in the global state with the current search term, level, and status
    dispatch(
      setFilters({
        search,
        level,
        status,
      })
    );
  }, [level, search, dispatch, status]);

  return (
    <div className={style.searchContainer}>
      <div className={style.exploreHeading}>Explore Challenges</div>
      <div style={{ display: "flex" }}>
        <div className={style.searchBar}>
          <div className={style.inputContainer}>
            <span className={style.searchIcon}>
              <Search />
            </span>
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div>
          <button className={style.filterBtn} onClick={toggleFilter}>
            Filter <Arrow />
          </button>
        </div>
      </div>
      <Dialog
        open={filterOpen}
        onClose={handleClose}
        sx={{ display: "flex", justifyContent: "flex-end", marginTop: "30px" }}
      >
        <DialogTitle>Filter</DialogTitle>
        <DialogContent>
          {/* Status Section */}
          <div className={style.filterSection}>
            <h4>Status</h4>
            <FormControlLabel
              control={
                <Checkbox
                  checked={status === "All"}
                  onChange={() => setStatus("All")}
                />
              }
              label="All"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={status === "Active"}
                  onChange={() => setStatus("Active")}
                />
              }
              label="Active"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={status === "Upcoming"}
                  onChange={() => setStatus("Upcoming")}
                />
              }
              label="Upcoming"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={status === "Past"}
                  onChange={() => setStatus("Past")}
                />
              }
              label="Past"
            />
          </div>
          {/* Divider */}
          <hr />
          {/* Level Section */}
          <div className={style.filterSection}>
            <h4>Level</h4>
            <FormControlLabel
              control={
                <Checkbox
                  checked={level === "easy"}
                  onChange={() => setLevel(level === "easy" ? "" : "easy")}
                />
              }
              label="Easy"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={level === "medium"}
                  onChange={() => setLevel(level === "medium" ? "" : "medium")}
                />
              }
              label="Medium"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={level === "hard"}
                  onChange={() => setLevel(level === "hard" ? "" : "hard")}
                />
              }
              label="Hard"
            />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              marginTop: "16px",
            }}
          >
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Filters;
