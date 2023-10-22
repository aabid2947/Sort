import React, { useState, useEffect } from "react";
import "./Generate.css";
import InsertionSort from "./Sorting/InsertionSort";
import SelectionSort from "./Sorting/SelectionSort";
import MergeSort from "./Sorting/MergeSort";
import QuickSort from "./Sorting/QuickSort";

export default function Generate() {
  const [Visible_Sorting_Area, setVisible_Sorting_Area] = useState(false);
  let [arr, setarr] = useState([]);
  let [original_arr, setorginal_arr] = useState([]);
  let [steps, setsteps] = useState(0);
  let [type_of_sort, settype_of_sort] = useState("");
  let [options, setoptions] = useState(false);
  const Generate_Array = () => {
    const duplicate = [];
    for (let i = 0; i < 10; i++) {
      duplicate[i] = Math.floor(Math.random() * 100);
    }
    setarr(duplicate);
    setorginal_arr(duplicate);
  };

  //  Code for Bubble sort simulation
  let [i, seti] = useState(0),
    [j, setj] = useState(0);

  let timer = true;
  useEffect(() => {
    let duplicate;
    if (steps === 0) {
      return;
    }

    if (!timer) return;
    let timerId = setInterval(() => {
      if (i === 10) {
        clearInterval(timerId);
        return;
      }
      duplicate = arr;
      setj((j) => j + 1);

      if (j >= 10) {
        seti((i) => i + 1);
        setj(i + 1);
      }
      if (duplicate[i] > duplicate[j]) {
        let temp = duplicate[i];
        duplicate[i] = duplicate[j];
        duplicate[j] = temp;
      }
      setsteps((steps) => steps + 1);
      setarr(duplicate);
    }, 1000);

    return () => clearTimeout(timerId);
  }, [steps]);

  return (
    <div className="Generate-container">
      <button
        onClick={() => {
          Generate_Array();
          setoptions(true);
        }}
      >
        Generate Array
      </button>
      <div className="Array">
        <div className="array_elements">{original_arr[0]}</div>
        <div className="array_elements">{original_arr[1]}</div>
        <div className="array_elements">{original_arr[2]}</div>
        <div className="array_elements">{original_arr[3]}</div>
        <div className="array_elements">{original_arr[4]}</div>
        <div className="array_elements">{original_arr[5]}</div>
        <div className="array_elements">{original_arr[6]}</div>
        <div className="array_elements">{original_arr[7]}</div>
        <div className="array_elements">{original_arr[8]}</div>
        <div className="array_elements">{original_arr[9]}</div>
      </div>

      {/* Input Area */}
      <div className="input-area">
        <fieldset style={options ? { display: "grid" } : { display: "none" }}>
          <legend htmlFor="type_of_sort">Select the Type of sorting</legend>
          <p>
            <input
              type="radio"
              name="type_of_sort"
              onChange={() => {
                settype_of_sort("BubbleSort");
              }}
            />
            <label htmlFor="type_of_sort">Bubble Sort</label>
          </p>
          <p>
            <input
              type="radio"
              name="type_of_sort"
              onChange={() => {
                settype_of_sort("SelectionSort");
              }}
            />
            <label htmlFor="type_of_sort">Selection Sort</label>
          </p>
          <p>
            <input
              type="radio"
              name="type_of_sort"
              onChange={() => {
                settype_of_sort("InsertionSort");
              }}
            />
            <label htmlFor="type_of_sort">Insertion Sort</label>
          </p>
          <p>
            <input
              type="radio"
              name="type_of_sort"
              onChange={() => {
                settype_of_sort("MergeSort");
              }}
            />
            <label htmlFor="type_of_sort">Merge Sort</label>
          </p>
          <p>
            <input
              type="radio"
              name="type_of_sort"
              onChange={() => {
                settype_of_sort("QuickSort");
              }}
            />
            <label htmlFor="type_of_sort">Quick Sort</label>
          </p>
          <button
            className="submit-button"
            style={{ margin: "0px" }}
            onClick={() => {
              setVisible_Sorting_Area(true);
            }}
          >
            Submit
          </button>
        </fieldset>
      </div>

      {type_of_sort === "InsertionSort" && Visible_Sorting_Area ? (
        <InsertionSort
          GeneratedArray={original_arr}
          Visible_Sorting_Area={Visible_Sorting_Area}
        />
      ) : (
        ""
      )}
      {type_of_sort === "SelectionSort" && Visible_Sorting_Area ? (
        <SelectionSort
          GeneratedArray={original_arr}
          Visible_Sorting_Area={Visible_Sorting_Area}
        />
      ) : (
        ""
      )}
      {type_of_sort === "MergeSort" && Visible_Sorting_Area ? (
        <MergeSort
          GeneratedArray={original_arr}
          Visible_Sorting_Area={Visible_Sorting_Area}
        />
      ) : (
        ""
      )}
      {type_of_sort === "QuickSort" && Visible_Sorting_Area ? (
        <QuickSort
          GeneratedArray={original_arr}
          Visible_Sorting_Area={Visible_Sorting_Area}
        />
      ) : (
        ""
      )}

      {/* Arrows */}
      <div
        className="pointers"
        style={
          type_of_sort === "BubbleSort" && Visible_Sorting_Area
            ? { display: "grid" }
            : { display: "none" }
        }
      >
        <div>
          <div
            style={
              i === 0 || j === 0 ? { display: "grid" } : { display: "none" }
            }
          >
            ↓
          </div>
        </div>{" "}
        <div>
          <div
            style={
              i === 1 || j === 1 ? { display: "grid" } : { display: "none" }
            }
          >
            ↓
          </div>
        </div>{" "}
        <div>
          <div
            style={
              i === 2 || j === 2 ? { display: "grid" } : { display: "none" }
            }
          >
            ↓
          </div>
        </div>{" "}
        <div>
          <div
            style={
              i === 3 || j === 3 ? { display: "grid" } : { display: "none" }
            }
          >
            ↓
          </div>
        </div>{" "}
        <div>
          <div
            style={
              i === 4 || j === 4 ? { display: "grid" } : { display: "none" }
            }
          >
            ↓
          </div>
        </div>
        <div>
          <div
            style={
              i === 5 || j === 5 ? { display: "grid" } : { display: "none" }
            }
          >
            ↓
          </div>
        </div>{" "}
        <div>
          <div
            style={
              i === 6 || j === 6 ? { display: "grid" } : { display: "none" }
            }
          >
            ↓
          </div>
        </div>{" "}
        <div>
          <div
            style={
              i === 7 || j === 7 ? { display: "grid" } : { display: "none" }
            }
          >
            ↓
          </div>
        </div>{" "}
        <div>
          <div
            style={
              i === 8 || j === 8 ? { display: "grid" } : { display: "none" }
            }
          >
            ↓
          </div>
        </div>{" "}
        <div>
          <div
            style={
              i === 9 || j === 9 ? { display: "grid" } : { display: "none" }
            }
          >
            ↓
          </div>
        </div>
      </div>

      {/* Sorting Viz */}
      <div
        className="sorting"
        style={
          type_of_sort === "BubbleSort" && Visible_Sorting_Area
            ? { display: "grid" }
            : { display: "none" }
        }
      >
        <div className="sorting_elements">{arr[0]}</div>
        <div className="sorting_elements">{arr[1]}</div>
        <div className="sorting_elements">{arr[2]}</div>
        <div className="sorting_elements">{arr[3]}</div>
        <div className="sorting_elements">{arr[4]}</div>
        <div className="sorting_elements">{arr[5]}</div>
        <div className="sorting_elements">{arr[6]}</div>
        <div className="sorting_elements">{arr[7]}</div>
        <div className="sorting_elements">{arr[8]}</div>
        <div className="sorting_elements">{arr[9]}</div>
      </div>
      <button
        className="sorting-button"
        style={
          type_of_sort === "BubbleSort" && Visible_Sorting_Area
            ? { display: "inline" }
            : { display: "none" }
        }
        onClick={() => {
          if (type_of_sort === "BubbleSort") setsteps((steps) => steps + 1);
        }}
      >
        Start sorting
      </button>
    </div>
  );
}
