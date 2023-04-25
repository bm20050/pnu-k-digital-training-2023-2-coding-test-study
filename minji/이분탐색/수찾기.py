import sys

n = int(sys.stdin.readline().rstrip())
arr = list(map(int, sys.stdin.readline().split()))
m = int(sys.stdin.readline().rstrip())
x = list(map(int, sys.stdin.readline().split()))

arr.sort()

start = 0
end = n - 1


def binary_search(arr, target, start, end):
    if start > end:
        return 0
    while start <= end:
        mid = (start + end) // 2
        if arr[mid] == target:
            return 1
        elif arr[mid] < target:
            start = mid + 1
        else:
            end = mid - 1


for i in x:
    print(binary_search(arr, i, start, end) if None )