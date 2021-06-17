import React from "react";
import { useState } from "react";
import { List, Typography, Divider } from "antd";
import { useSelector } from "react-redux";

export default function Show() {
  const todos = useSelector((state) => state.todos);
  console.log(todos);

  return (
    <div className="container">
      <h1>SHOW MY TODOS</h1>

      <List
        itemLayout="horizontal"
        dataSource={todos}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta title={item.title} />
          </List.Item>
        )}
      />
    </div>
  );
}
