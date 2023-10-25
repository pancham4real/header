import React from "react";
import { useState, useEffect } from "react";

export default function EmailView() {
  const [openView, setOpenView] = useState(false);
  const [index, setIndex] = useState(-1);
  const [emails, setEmails] = useState();
  const [isloading, setIsloading] = useState(true);
  const [body, setBody] = useState();

  // const Emails = {
  //   list: [
  //     {
  //       id: "1",
  //       from: {
  //         email: "bounced@flipkart.com",
  //         name: "bounced",
  //       },
  //       date: 1582729505000,
  //       subject: "Lorem Ipsum",
  //       short_description:
  //         "Vestibulum sit amet ipsum aliquet, lacinia nulla malesuada, ullamcorper massa",
  //     },
  //     {
  //       id: "2",
  //       from: {
  //         email: "noreply@flipkart.com",
  //         name: "noreply",
  //       },
  //       date: 1582728505000,
  //       subject: "Lorem Ipsum",
  //       short_description:
  //         "Aenean ut odio eu risus sollicitudin vehicula volutpat vel ante",
  //     },
  //     {
  //       id: "3",
  //       from: {
  //         email: "yourfriends@flipkart.com",
  //         name: "yourfriends",
  //       },
  //       date: 1582727505000,
  //       subject: "Lorem Ipsum",
  //       short_description:
  //         "Nam eget erat accumsan, auctor sapien ut, tempor diam",
  //     },
  //     {
  //       id: "4",
  //       from: {
  //         email: "hello@flipkart.com",
  //         name: "hello",
  //       },
  //       date: 1582726505000,
  //       subject: "Lorem Ipsum",
  //       short_description: "Morbi eget nunc interdum felis varius tincidunt",
  //     },
  //     {
  //       id: "5",
  //       from: {
  //         email: "howdy@flipkart.com",
  //         name: "howdy",
  //       },
  //       date: 1582725505000,
  //       subject: "Lorem Ipsum",
  //       short_description:
  //         "Integer consequat dolor sed justo consequat, id elementum eros facilisis",
  //     },
  //     {
  //       id: "6",
  //       from: {
  //         email: "media@flipkart.com",
  //         name: "media",
  //       },
  //       date: 1582724505000,
  //       subject: "Lorem Ipsum",
  //       short_description:
  //         "Pellentesque sed erat pulvinar, ornare elit at, elementum tortor",
  //     },
  //     {
  //       id: "7",
  //       from: {
  //         email: "press@flipkart.com",
  //         name: "press",
  //       },
  //       date: 1582724481000,
  //       subject: "Lorem Ipsum",
  //       short_description: "Phasellus sagittis metus in gravida posuere",
  //     },
  //     {
  //       id: "8",
  //       from: {
  //         email: "affiliates@flipkart.com",
  //         name: "affiliates",
  //       },
  //       date: 1582724433000,
  //       subject: "Lorem Ipsum",
  //       short_description: "Nunc tincidunt metus vel enim tempus ultricies",
  //     },
  //     {
  //       id: "9",
  //       from: {
  //         email: "partners@flipkart.com",
  //         name: "partners",
  //       },
  //       date: 1582724402000,
  //       subject: "Lorem Ipsum",
  //       short_description:
  //         "Vestibulum viverra dui finibus, rutrum dui luctus, hendrerit odio",
  //     },
  //     {
  //       id: "10",
  //       from: {
  //         email: "domains@flipkart.com",
  //         name: "domains",
  //       },
  //       date: 1582724402000,
  //       subject: "Lorem Ipsum",
  //       short_description: "Sed vitae est id orci viverra gravida ut at turpis",
  //     },
  //   ],
  //   total: 15,
  // };

  const apiUrl = "https://flipkart-email-mock.vercel.app/";

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setEmails(data);
        setIsloading(false);
      });
  }, []);

  function Email(props) {
    console.log("props", props);
    return (
      <div
        style={{
          display: "flex",
          border: index === props.ind ? "solid 2px red" : "solid 2px grey",
          margin: "5px",
          padding: "5px",
          alignItems: "center",
          justifyContent: "flex-start",
          flexDirection: "coloumn",
        }}
        onClick={() => {
          setOpenView(true);
          setIndex(props.ind);
          Handlebody(props.id);
        }}
      >
        <div
          style={{
            display: "flex",
            width: "60px",
            height: "60px",
            backgroundColor: "rgb(229,64,101)",
            borderRadius: "50%",
            justifyContent: "center",
            alignItems: "center",
            marginRight: "10px",
          }}
        >
          A
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            flex: 1,
            justifyContent: "flex-start",
          }}
        >
          <div> {props.from}</div>
          <div> {props.brand} </div>
          <div>{props.subject}</div>
          <div>{props.date}</div>
        </div>
      </div>
    );
  }
  const Handlebody = (key) => {
    // const [apiCalled, setApiCalled] = useState(false);

    // if (!apiCalled) {
    const url = `https://flipkart-email-mock.vercel.app/?id=${key}`;
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setBody(data?.body);
        setIsloading(false);
      });
    // setTimeout(() => {
    //   console.log("url", url);
    //   console.log("API called");
    //   setApiCalled(true);
    // }, 1000);
    // }
  };

  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        padding: "40px",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "25%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginTop: "10px",
          // backgroundColor: "red",
        }}
      >
        <span style={{ marginRight: "10px" }}>Filter By:</span>
        <span> Unread</span>
        <span
          style={{
            backgroundColor: "gray",
            borderRadius: "10px",
            paddingRight: "10px",
            paddingLeft: "10px",
            paddingTop: "2px",
            paddingBottom: "2px",
            border: "solid 1px black",
          }}
        >
          Read
        </span>
        <span> Favorites</span>
      </div>
      {/* <div>nilima</div> */}
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "coloumn",
          justifyContent: "space-between",
        }}
      >
        <div style={{ width: "-webkit-fill-available" }}>
          {emails?.list?.map((e, index) => (
            <Email
              from={e.from.email}
              key={e.id}
              brand={e.short_description}
              ind={index}
              subject={e.subject}
              date={e.date}
              name={e.from.name}
              id={e.id}
            />
          ))}
        </div>

        {openView && (
          <div
            style={{
              width: "90%",
              // display: "flex",
              // alignItems: "center",
              // justifyContent: "center",
              // flexDirection: "row",
            }}
          >
            <button
              style={{
                backgroundColor: "rgb(229,64,101)",
                color: "white",
                borderRadius: "10px",
                borderColor: "rgb(229,64,101)",
              }}
            >
              Mark as Favorite
            </button>
            <div>{body}</div>
          </div>
        )}
      </div>
    </div>
  );
}
