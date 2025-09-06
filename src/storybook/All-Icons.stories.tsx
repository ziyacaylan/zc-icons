import type { Meta } from "@storybook/react";
import * as Icons from "components";
import iconList from "../../src/meta.json";

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
      .icon-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 56px;
      }
      .icon-item {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: 56px;
        height: 56px;
        background-color: #f2f2f5;
        border-radius: 6px;
      }
      .icon-name {
        margin-top: 4px;
        font-size: 10px;
        text-align: center;
        background-color: #f2f2f5;
        border-radius: 4px;
        padding: 2px 0;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #333;
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
                    <div key={iconName} className="icon-wrapper">
                        <div className="icon-item" title={iconName}>
                            {IconComponent ? (
                                <IconComponent
                                    style={{ fontSize: 24, color: "#343434" }}
                                />
                            ) : null}
                        </div>
                        <div className="icon-name">{iconName}</div>
                        {category ? (
                            <span className="icon-version">{category}</span>
                        ) : null}
                    </div>
                );
            })}
        </div>
    </>
);
