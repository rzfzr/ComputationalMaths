limit = 10
# Methods:
# 0 = Default
# 1 = Falsa posicao


def bis(fun, a, b, tol, method):
    def f(x):
        return eval(fun)
    counter = 0
    if f(a)*f(b) < 0:
        print('tem funcao zero')
        while counter < limit:
            counter += 1

            if method == 0:
                xm = abs((a+b)/2)
            elif method == 1:
                xm = (b*f(a)-a*f(b))/(f(a)-f(b))

            print('run:', counter, 'xm:', xm, 'a:', a,
                  'f(a):', f(a), 'b:', b, 'f(b):', f(b))

            if abs(f(xm)) <= tol:
                return
            if f(xm) < 0 and f(a) < 0:
                a = xm
            elif f(xm) < 0 and f(b) < 0:
                b = xm
            elif f(xm) > 0 and f(a) > 0:
                a = xm
            elif f(xm) > 0 and f(b) > 0:
                b = xm
    else:
        print('nao tem funcao zero')


def fixedPoint(fun, a, b, tol):
    def f(x):
        return eval(fun)
    # gx = (fun+'+x')
    gx = '(7-pow(x,3))/8'

    def g(x):
        return eval(gx)

    if f(a)*f(b) < 0:
        print('tem funcao zero')
        counter = 0
        x0 = 0.5
        while counter < limit:
            print(counter, x0, g(x0), f(g(x0)))
            if abs(f(x0)) <= tol:
                return
            else:
                x0 = g(x0)
            counter += 1

    else:
        print('nao tem funcao zero')


def newton(fun, a, b, tol):
    def f(x):
        return eval(fun)

    def fl(x0):
        return eval('(-1/pow(x0,2))+2*x0')
    x0 = 2
    # print(fl(x0))
    if abs(f(x0)) >= tol:
        print('funcao zero: ', x0)
        counter = 0
        while counter < limit:
            if abs(f(x0)) < tol:
                return
            print(counter, x0)
            x0 = x0 - (f(x0)/fl(x0))
            counter += 1
    else:
        print('nao tem funcao zero')


# bis('pow(x,3)-7.5*pow(x,2)+12*x+3',4.5,6,0.05, method = 0)
# bis('4754.28*((1-pow((1+x),-48))/x)-50000',0.09,0.10,0.1, method = 1)
newton('1/x+pow(x,2)-5', 1, 3, 0.001)
# fixedPoint('pow(x,3)+8*x-7',0,1,0.1)
