# 정렬하지 않은 version
n = int(input())
a = list(map(int, input().split()))
b = list(map(int, input().split()))
s = 0
for i in range(n):
    s += min(a) * max(b)
    a.pop(a.index(min(a)))
    b.pop(b.index(max(b)))
print(s)

# 정렬 version
n = int(input())
a = list(map(int, input().split()))
b = list(map(int, input().split()))
a.sort()
b.sort(reverse=True)
s = 0
for i in range(n):
        s += a[i]*b[i]
print(s)