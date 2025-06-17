import type { Meta } from "@storybook/react";
import React from "react";
import iconList from "../meta.json";
import * as Icons from "../react";

const meta: Meta = {
    title: "Overview/All Icons",
};

export default meta;

export const AllIcons = () => (
    <>
        <style>
            {`
      .icon-list {
        margin: 50px;
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
      }
      .icon-item{
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: 56px;
        height: 56px;
        background-color: #f2f2f5;
        border-radius: 6px;
      }
      .icon-version {
        font-size: 10px;
        color: #999;
        position: absolute;
        bottom: 0;
        right: 0;
        display: none;
      }
      .icon-item:hover + .icon-version {
        display: block
      }
      `}
        </style>
        <div className="icon-list">
            {iconList.map(({ iconName, category }) => {
                const IconComponent = Icons[iconName];

                return (
                    <div key={iconName} style={{ position: "relative" }}>
                        <div className="icon-item" title={iconName}>
                            {IconComponent ? (
                                <IconComponent
                                    style={{ fontSize: 24, color: "#343434" }}
                                />
                            ) : null}
                        </div>
                        {category ? (
                            <span className="icon-version">{category}</span>
                        ) : null}
                    </div>
                );
            })}
        </div>
    </>
);
