export default class ArrayMethod {
    hello(message) {
        let a = message || 'hello world'
        console.log(a)
    }

    // 数组去重
    unique(arr) {
        // let result = []
        // arr.map(item => {
        //   result.indexOf(item) === -1 && result.push(item)
        // })
        // return result

        let _obj = {}
        arr.forEach(x => {
            _obj[x] = ''
        })
        return Object.getOwnPropertyNames(_obj)
    }

    // 判断是否是数组
    isArray(object) {
        return Object.prototype.toString.call(object) === '[object Array]'
    }

    // 数组求交集
    intersection(arr1, arr2) {
        let setArr1 = new Set(arr1)
        let setArr2 = new Set(arr2)
        let result = new Set([...setArr1].filter(x => {
            return setArr2.has(x)
        }))
        return Array.from(result)
    }

    // 数组求并集
    union(arr1, arr2) {
        let setArr1 = new Set(arr1)
        let setArr2 = new Set(arr2)
        return Array.from(new Set([...setArr1, ...setArr2]))
    }

    // 数组求差集
    difference(arr1, arr2) {
        let setArr1 = new Set(arr1)
        let setArr2 = new Set(arr2)
        let result = new Set([...setArr1].filter(x => {
            return !setArr2.has(x)
        }))
        return Array.from(result)
    }

    // 数组前n个元素去掉
    drop(arr, n) {
        if (!n && arr) {
            arr.shift();
            return arr
        } else {
            for (var i = 0; i < n; i++) {
                arr.shift()
            }
            return arr
        }

    }
}
