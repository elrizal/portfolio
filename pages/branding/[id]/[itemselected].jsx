import galleryList from "./cases.json";
import React from "react";
import { useRouter } from "next/router";
import Layout from "../../../components/layout";
import BackBtn from "../../../components/back";
import LazyLoad from "react-lazyload";
import Skeleton from "react-loading-skeleton";
const Comment = () => {
  const router = useRouter();
  const { itemselected } = router.query;

  return (
    <Layout>
      <BackBtn />
      <div className="container">
        {galleryList.map((obj) => {
          if (itemselected == obj.endpoint) {
            return (
              <div className="row animated fadeIn">
                <div className="col-sm-12 col-md-8 col-lg-5">
                  <img
                    src={obj.img || <Skeleton width={500} height={500} />}
                    alt="Case"
                    className="aside-caseimg add-centering"
                  />
                  <div className="row">
                    <LazyLoad>
                      {obj.images.map((objImg) => {
                        return (
                          <div className="col-sm-6 col-md-6 col-lg-6">
                            <a href={objImg.img} target="_blank">
                              <img
                                src={objImg.prev}
                                alt="01"
                                className="added-imgs"
                              />
                            </a>
                          </div>
                        );
                      })}
                    </LazyLoad>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-7">
                  <h1>{obj.title}</h1>
                  <h2>{obj.company}</h2>
                  <p>
                    <b>Responsibilities:&ensp;</b>
                    {obj.role}
                    <br />
                    <b>Project timeframe:&ensp;</b>
                    {obj.timeline}
                  </p>
                  <h3>About the project</h3>
                  <p>{obj.description}</p>
                  <h3>The process</h3>
                  <p>{obj.process}</p>
                  <p>{obj.result}</p>
                </div>
              </div>
            );
          }
        })}
      </div>
    </Layout>
  );
};

export default Comment;
