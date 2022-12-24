import { data } from "../utility/data";

export default function Segments() {
  const colors = ["#29208a", "#801b48", "#b5792a", "#094a1d", "#FA8072"];
  return (
    <>
      <div
        id="segment"
        style={{
          backgroundColor: "#ccc",
          display: "flex",
          alignItems: "center",
          padding: "10px",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        {data.map((item, index) => (
          <div
            style={{
              zIndex: item.id,
              position: "relative",
            }}
          >
            <div
              style={{
                width: "180px",
                backgroundColor: colors[index],
                height: "30px",
                ...(index % 2 === 0
                  ? {
                      borderTopRightRadius: 10,
                      borderTopLeftRadius: 10,
                      position: "absolute",
                      top: -30,
                    }
                  : {
                      borderBottomRightRadius: 10,
                      borderBottomLeftRadius: 10,
                      position: "absolute",
                      bottom: -30,
                    }),
              }}
            >
              <div
                style={{
                  backgroundColor: "#fff",
                  width: "20px",
                  height: "20px",
                  padding: "10px",
                  marginLeft: "4.1rem",
                  textAlign: "center",
                  border: `solid 1px ${colors[index]}`,
                  color: colors[index],
                  ...(index % 2 === 0
                    ? {
                        marginTop: "-20px",
                        borderRadius: "100px",
                      }
                    : {
                        marginTop: "10px",
                        borderRadius: "100px",
                      }),
                }}
              >
                {index + 1}
              </div>
            </div>
            <div
              key={item.id}
              style={{
                ...(index % 2 === 0
                  ? {
                      backgroundImage: "linear-gradient(#ebe8e8, #ccc)",
                    }
                  : {
                      backgroundImage: "linear-gradient(#ccc, #ebe8e8)",
                    }),
                height: "200px",
                width: "180px",
                boxShadow: "20px 0px 20px -20px #858585 ",
              }}
            >
              <div
                style={{
                  ...(index % 2 === 0
                    ? {}
                    : {
                        position: "absolute",
                        top: "6rem",
                      }),
                  textAlign: "center",
                }}
              >
                {item.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
