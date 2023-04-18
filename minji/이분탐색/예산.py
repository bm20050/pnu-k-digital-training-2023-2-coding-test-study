import sys
n = int(sys.stdin.readline().rstrip())
array = list(map(int, sys.stdin.readline().split()))
m = int(sys.stdin.readline().rstrip())

start = min(array)
end = max(array)
m_list = []

while start < end:
    if sum(m_list) <= m:
        mid = (start + end) // 2
        for x in array:
            if mid > x:
                m_list.append(x)
                end = mid - 1
            else:
                m_list.append(mid)
                start = mid + 1
    else:
        break

print(max(m_list))
