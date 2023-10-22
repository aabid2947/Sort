import React, { useState, useEffect } from "react";

export default function SelectionSort(props) {
  const [steps, setsteps] = useState(0);
  const [arr, setarr] = useState(props.GeneratedArray);
  console.log(arr);

  //  code for Selection sort Visual
  let [i, seti] = useState(0),
    [j, setj] = useState(0),
    [min_index, setmin_index] = useState(0);

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

      if (duplicate[j] < duplicate[min_index] &&j<10) setmin_index(j);

      if (j >= 10) {
        let temp = duplicate[i];
        duplicate[i] = duplicate[min_index];
        duplicate[min_index] = temp;
        seti((i) => i + 1);
        setj(i + 1);
        setmin_index(i+1);
      }

      setsteps((steps) => steps + 1);
      setarr(duplicate);
      console.log(arr,min_index)
    }, 1000);

    return () => clearTimeout(timerId);
  }, [steps]);
  return (
    <div>
       <div
        className="pointers"
        style={
         props.Visible_Sorting_Area
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
      <div
        className="sorting"
        style={
          props.Visible_Sorting_Area ? { display: "grid" } : { display: "none" }
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
          props.Visible_Sorting_Area
            ? { display: "inline" }
            : { display: "none" }
        }
        onClick={() => {
          setsteps((steps) => steps + 1);
        }}
      >
        Start sorting
      </button>
    </div>
  );
}
