import React from 'react'
import { Input } from './UI/input/Input';
import { MySelect } from './UI/select/MySelect';

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <Input
        placeholder="Search"
        value={filter.query}
        onChange={(event) => setFilter({ ...filter, query: event.target.value })}
      />
      <MySelect
        value={filter.sort}
        onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
        defaultOption="Сортировка"
        options={[
          { value: "title", name: "По названию" },
          { value: "body", name: "По описанию" }
        ]}
      />
    </div>
  )
}


export { PostFilter };
