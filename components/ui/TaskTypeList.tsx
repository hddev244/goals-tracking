import React, { useMemo } from 'react'
import { ThemedView } from '../ThemedView'
import { TASKS_TYPE } from '@/data/initdata'


/**
 * @selectedId: id của task type đang được chọn
 * @onSelect: callback khi chọn task type
 */
type TaskTypeListProps = {
  onSelect: (id: string) => void
  selectedId: string
}

export default function TaskTypeList() {
  const types = useMemo(() => {
    return TASKS_TYPE
  }
  , [])
  return (
    <ThemedView>
      {
        types.map((type) => {
          return (
            <ThemedView key={type.id}>
              <ThemedView>
                {type.icon}
              </ThemedView>
              <ThemedView>
                {type.label}
              </ThemedView>
            </ThemedView>
          )
        })
      }

    </ThemedView>
  )
}
