import React, { useEffect } from "react";
import NovelList from "../molecules/novel-list";
import { connect } from "react-redux";
import { getList } from "./novel-api";

const NovelListPageContent = ({ novels, setNovels }) => {
  useEffect(() => {
    getList().then((resultData) => {
      if (resultData) {
        setNovels(resultData);
      }
    });
  }, []);

  return (
    <div className="">
      {/* <div class="mx-4 mb-6">
        <input
          class="bg-gray-600 appearance-none border-2 border-gray-800 w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          id="inline-full-name"
          type="text"
          value="Search"
        />
      </div> */}
      <ul class="flex bg-gray-800 shadow-lg">
        <li class="-mb-px mr-1">
          <a
            class="inline-block py-2 px-4 text-gray-200 font-semibold border-b-4 border-blue-600"
            href="#"
          >
            Alls
          </a>
        </li>
        <li class="mr-1">
          <a
            class="inline-block py-2 px-4 text-gray-500 hover:text-gray-300 font-semibold border-b-4 border-gray-800"
            href="#"
          >
            Trending
          </a>
        </li>
        <li class="mr-1">
          <a
            class="inline-block py-2 px-4 text-gray-500 hover:text-gray-300 font-semibold"
            href="#"
          >
            Favorites
          </a>
        </li>
      </ul>
      >
      <NovelList items={novels} />
    </div>
  );
};

const mapStateToProps = ({ novels }) => {
  return { novels };
};

const mapDispatchToProps = (dispatch) => {
  return { setNovels: (data) => dispatch({ type: `NOVEL-GET-LIST`, data }) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NovelListPageContent);
